import React from "react";
import Card from "../Card/Card";
import style from "./CardContainer.module.css";

const CardsContainer = ({ countries, currentPage, pageSize }) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const currentData = countries.slice(startIndex, endIndex);

  return (
    <div className={style.container}>
      {currentData.map(({ id, name, img, continent }) => (
        <Card key={id} id={id} name={name} img={img} continent={continent} />
      ))}
    </div>
  );
};

export default CardsContainer;
