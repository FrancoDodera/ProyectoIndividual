import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardContainer.module.css";
import {
  getCountryByName,
  orderCountries,
  orderContinent,
  orderByPopulation,
  orderByActivity,
} from "../../redux/action";
import SearchBar from "../SerchBar/SearchBar";

const CardsContainer = ({
  countries,
  currentPage,
  pageSize,
  setCurrentPage,
}) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const currentData = countries.slice(startIndex, endIndex);
  const [data, setData] = useState(currentData);
  const countryName = useSelector((state) => state.countriesByName);
  const [allCountries, setCountries] = useState([]);
  const activities = useSelector((state) => state.activity);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryByName(""));
  }, [dispatch]);

  useEffect(() => {
    setData(countryName.slice(startIndex, endIndex));
  }, [countryName]);

  useEffect(() => {
    setData(currentData);
  }, [currentPage]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;
    const currentData = countryName.slice(startIndex, endIndex);
    setData(currentData);
  }, [countryName, currentPage, pageSize]);

  //FILTER HANDLERS
  const handleOrder = (event) => {
    dispatch(orderCountries(event.target.value));
  };
  const handleContinent = (event) => {
    dispatch(orderContinent(event.target.value));
    setCurrentPage(1);
    if (event.target.value === "All") {
      setCountries([...allCountries]);
    } else {
      setCountries([...countryName]);
    }
  };

  const handlePopulation = (event) => {
    dispatch(orderByPopulation(event.target.value));
  };

  const handleActivity = (event) => {
    dispatch(orderByActivity(event.target.value));
    setCurrentPage(1);
  };
  return (
    <div>
      <div className={style.navegation}>
        <div>
          <label className={style.label}>Activity:</label>
          <select className={style.select} onChange={handleActivity}>
            <option value="All">All Activities</option>
            {activities && activities.length > 0 ? (
              activities.map((activity) => (
                <option key={activity.id}>{activity.name}</option>
              ))
            ) : (
              <option disabled>No hay actividades</option>
            )}
          </select>
        </div>
        <div>
          <label className={style.label}>Order:</label>
          <select className={style.select} onChange={handleOrder}>
            <option value="Select">Select</option>
            <option value="A">A-Z</option>
            <option value="D">Z-A</option>
          </select>
        </div>
        <div>
          <label className={style.label}>Countries:</label>
          <select className={style.select} onChange={handleContinent}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="North America">Nouth America</option>
            <option value="South America">South America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Ociania</option>
          </select>
        </div>
        <div>
          <label className={style.label}>Population:</label>
          <select className={style.select} onChange={handlePopulation}>
            <option>Select</option>
            <option value="More">More population</option>
            <option value="Lower">Lower population</option>
          </select>
        </div>
        <div className={style.SearchBar}>
          <SearchBar setData={setData} setCurrentPage={setCurrentPage} />
        </div>
      </div>
      <div className={style.container}>
        {data.map(({ id, name, img, continent }) => (
          <Card key={id} id={id} name={name} img={img} continent={continent} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
