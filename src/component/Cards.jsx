import React from "react";
import Carad from "./Card";

const Cards = ({ data }) => {
  return (
    <>
    <h1 style={{textAlign:"center",marginBlock:"50px"}}>Feature Products</h1>
      <div className="container">

        {data.map((prod) => {
          return <Carad key={prod.id} prod={prod} />;
        })}
      </div>
    </>
  );
};

export default Cards;
