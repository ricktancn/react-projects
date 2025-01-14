import { useEffect, useState } from "react";

export function useWeather(location) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [displayLocation, setDisplayLocation] = useState("");
  const [weather, setWeather] = useState({});

  function convertToFlag(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchWeather() {
        try {
          if (location.length < 2) return;
          setIsLoading(true);

          // call the weather API
          const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${location}`,
            { signal: controller.signal }
          );

          // get the response
          const geoData = await geoRes.json();
          if (!geoData.results) throw new Error("Location not found");

          // update the state
          const { latitude, longitude, timezone, name, country_code } =
            geoData.results.at(0);

          setDisplayLocation(`${name} ${convertToFlag(country_code)}`);

          const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
          );
          const weatherData = await weatherRes.json();

          setWeather(weatherData.daily);
          setError("");
        } catch (err) {
          console.error(err.message);

          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      fetchWeather();

      return () => controller.abort();
    },
    [location]
  );

  return { displayLocation, weather, isLoading, error };
}
