import React from "react";
// import birdPlaceholder1 from "./birdPlaceholder1.png";
import bluetit from "./images/bluetit.png";
import robin from "./images/robin.png";
import unkownred from "./images/unkownred.png";
import nuthatch from "./images/nuthatch.png";
import redwingedblackbird from "./images/redwingedblackbird.png";
import mountainbluebird from "./images/mountainbluebird.png";

const Card = props => {
  return (
    <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5 card">
      <img alt="birds" src={require(`./images/${props.picture}.png`)} />
      <div className="card-text">
        <h2>{props.title}</h2>
        <p className="card-description">{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
