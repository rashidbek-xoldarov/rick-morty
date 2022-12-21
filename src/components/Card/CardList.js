import React from "react";
import CardItem from "./CardItem";

const CardList = ({ data }) => {
  return (
    <>
      <ul className="row list-unstyled justify-content-between">
        {data.map((item) => (
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
    </>
  );
};

export default CardList;
