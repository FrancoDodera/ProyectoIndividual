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
  console.log(countries.Activity);
  return (
    <>
      <div className={style.detailContainer}>
        <div className={style.actContainer}>
          <h2>Actividades</h2>
          <div className={style.cardsContainer}>
            {countries.Activities?.length ? (
              countries.Activities.map((activity) => {
                return (
                  <div className={style.activities} key={activity.id}>
                    <h3 className={style.activityName}>
                      {activity.name.toUpperCase()}
                    </h3>
                    <p className={style.activityAtributes}>
                      Difficulty: {activity.difficulty}
                    </p>
                    <p className={style.activityAtributes}>
                      Duration: {activity.duration} hours
                    </p>
                    <p className={style.activityAtributes}>
                      Season: {activity.seasons}
                    </p>
                  </div>
                );
              })
            ) : (
              <div>
                <h3>There are no activities here</h3>
                <NavLink to="/form">
                  <button className={style.createBtn}>Create it</button>
                </NavLink>
              </div>
            )}
          </div>
        </div>

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
      </div>
    </>
  );
};

export default Detail;
