import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./Detail.module.css";
import { getCountry } from "../../redux/action";
import { NavLink } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const countries = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountry(id));
  }, [dispatch, id]);

  return (
    <div className={style.container}>
      <img className={style.img} src={countries?.img} alt="" />
      <h1 className={style.h1}> {countries?.name}</h1>
      <h2 className={style.h2}>Continent: {countries?.continent}</h2>
      <h2 className={style.h2}>Capital: {countries?.capital}</h2>
      {countries.subregion && (
        <h2 className={style.h2}>Subregión: {countries.subregion}</h2>
      )}
      {countries.area && (
        <h2 className={style.h2}>Área: {countries.area} Km²</h2>
      )}

      <h2 className={style.h2}>Population: {countries?.population}</h2>
      <NavLink to="/home">
        <button className={style.button}> BACK </button>
      </NavLink>
    </div>
  );
};

export default Detail;
