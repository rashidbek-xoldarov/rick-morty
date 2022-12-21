import React from "react";
import CardItem from "./CardItem";

const CardList = ({ data }) => {
  console.log(Object.keys(data).includes("results"));
  return (
    <>
      {Object.keys(data).includes("results") ? (
        <ul className="row list-unstyled justify-content-between">
          {data.results.map((item) => (
            <CardItem
              id={item.id}
              image={item.image}
              name={item.name}
              gender={item.gender}
              species={item.species}
              status={item.status}
            />
          ))}
        </ul>
      ) : (
        <p className="fs-3 text-black">Sorry there is no hero in this filter</p>
      )}
    </>
  );
};

export default CardList;
