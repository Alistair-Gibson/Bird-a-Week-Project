import React from "react";
import birdPlaceholder1 from "./birdPlaceholder1.png";
// import birdPlaceholder2 from "./birdPlaceholder2.png";
// import birdPlaceholder3 from "./birdPlaceholder3.png";
// import birdPlaceholder4 from "./birdPlaceholder4.png";
// import birdPlaceholder5 from "./birdPlaceholder5.png";

const Card = ({ picture, title, text, id }) => {
  return (
    <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="birds" src={birdPlaceholder1} />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
