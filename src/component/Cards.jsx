import React from "react";
import Carad from "./Card";

const Cards = ({ data }) => {
  return (
    <>
      <div className="container">
        {data.map((prod) => {
          return <Carad key={prod.id} prod={prod} />;
        })}
      </div>
    </>
  );
};

export default Cards;
