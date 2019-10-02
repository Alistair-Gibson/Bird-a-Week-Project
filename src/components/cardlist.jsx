import React from "react";
import Card from "./card";

const CardList = ({ birds }) => {
  const cardComponent = birds.map((user, i) => {
    return (
      <Card
        key={i}
        id={birds[i].id}
        picture={birds[i].picture}
        title={birds[i].title}
        text={birds[i].text}
      />
    );
  });
  return <div className="center">{cardComponent}</div>;
};

export default CardList;
