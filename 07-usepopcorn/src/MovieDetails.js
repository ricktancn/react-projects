import { useState, useEffect, useRef } from "react";
import { KEY, Loader } from "./App";
import StarRating from "./StarRating";
import { useKey } from "./useKey";

export function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0); //initial value is 0

  useEffect(
    function () {
      if (userRating) countRef.current += 1;
    },
    [userRating]
  );

  //find if selectedId is in watched list
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);

  const watchedUserRating = isWatched
    ? watched
        .filter((movie) => movie.imdbID === selectedId)
        .map((movie) => movie.userRating)
    : 0;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  /* eslint-disable */
  // if (imdbRating > 8) {
  //   [isTop, setTop] = useState(true);
  // }

  // const [isTop, setTop] = useState(imdbRating > 8); // here only evaluate on the first render
  // console.log(isTop);

  // useEffect(
  //   function () {
  //     setIsTop(imdbRating > 8);
  //   },
  //   [imdbRating]
  // );

  const isTop = imdbRating > 8;
  console.log(isTop);

  // const [avgRating, setAvgRating] = useState(0);

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDecisions: countRef.current,
    };
    onAddWatched(newWatchedMovie);
    // onCloseMovie();

    // setAvgRating(Number(imdbRating));
    // setAvgRating((avgRating) => (avgRating + Number(userRating)) / 2);
  }

  useKey("Escape", onCloseMovie);

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();

      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`; //dynamic title
    //cleanup function for this effect
    return function () {
      document.title = "usePopcorn";
    };
  }, [title]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                <span>{imdbRating}</span>
              </p>
            </div>
          </header>
          {/* <p>{avgRating}</p> */}
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated this movie {watchedUserRating} out of 10 ⭐stars
                </p>
              )}
            </div>
            <p className="plot">{plot}</p>
            <p className="actors">
              <strong>Starring:</strong> {actors}
            </p>
            <p className="director">
              <strong>Directed by:</strong> {director}
            </p>
          </section>
        </>
      )}
    </div>
  );
}
