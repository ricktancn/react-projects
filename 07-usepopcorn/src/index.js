import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
// import "./index.css";
//import App from "./App";

import "./styles.css";

//import StarRating from "./StarRating";
import TextExpander from "./TextExpander";

// function TestStar() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <>
//       <StarRating maxRating={5} color="green" onSetRating={setMovieRating} />
//       <p> This movie is {movieRating} star </p>
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating maxRating={5} />
    <StarRating />
    <StarRating size={24} color="red" />
    <StarRating
      maxRating={5}
      color="blue"
      messages={["Terrible", "Poor", "Average", "Good", "Excellent"]}
      defaultRating={3}
    />
    <TestStar /> */}
    <>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>
      <br></br>
      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>
      <br></br>
      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </>
  </React.StrictMode>
);
