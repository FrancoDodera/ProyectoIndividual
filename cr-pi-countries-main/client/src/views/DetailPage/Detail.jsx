import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [countries, setCountries] = useState({});
  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`).then(({ data }) => {
      if (data) {
        setCountries(data);
      } else {
        window.alert("No hay country con este id");
      }
    });
  }, [id]);

  return (
    <div className={style.container}>
      <img className={style.img} src={countries.img} alt="" />
      <h1 className={style.h1}> {countries.name}</h1>
      <h2 className={style.h2}>Continent: {countries.continent}</h2>
      <h2 className={style.h2}>Capital: {countries.capital}</h2>
      <h2 className={style.h2}>Subregion: {countries.subregion}</h2>
      <h2 className={style.h2}>Area: {countries.area}</h2>
      <h2 className={style.h2}>Population: {countries.population}</h2>
    </div>
  );
};

export default Detail;
