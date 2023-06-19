import React, { useEffect } from "react";
import Card from "../Card/Card";
import style from "./CardContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountryByName,
  orderCountries,
  orderContinent,
  orderByPopulation,
} from "../../redux/action";
import { useState } from "react";
import SearchBar from "../SerchBar/SearchBar";

const CardsContainer = ({ countries, currentPage, pageSize }) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const currentData = countries.slice(startIndex, endIndex);
  const [data, setData] = useState(currentData);
  const countryName = useSelector((state) => state.countriesByName);
  const [allCountries, setCountries] = useState([]);
  const activities = useSelector((state) => state.activity);
  console.log(activities);
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

  const handleOrder = (event) => {
    dispatch(orderCountries(event.target.value));
  };
  const handleContinent = (event) => {
    dispatch(orderContinent(event.target.value));
    if (event.target.value === "All") {
      setCountries([...allCountries]);
    } else {
      setCountries([...countryName]);
    }
  };

  const handlePopulation = (event) => {
    dispatch(orderByPopulation(event.target.value));
  };

  return (
    <div>
      <div className={style.navegation}>
        <div>
          <label className={style.label}>Activity:</label>
          <select className={style.select}>
            <option value="Select">Select</option>
            {activities?.map((activity) => (
              <option>{activity.name}</option>
            ))}
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
            <option value="Select">Select</option>
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
          <SearchBar setData={setData} />
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
