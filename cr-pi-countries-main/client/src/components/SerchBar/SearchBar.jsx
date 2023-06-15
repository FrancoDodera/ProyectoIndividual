import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByName } from "../../redux/action";
import axios from "axios";
import style from "./SearchBar.module.css";

const SearchBar = (props) => {
  const { setData } = props;
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const countryName = useSelector((state) => state.countriesByName);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getCountryByName(searchTerm));
    setData([...countryName]);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3001/countries/name?name=${searchTerm}`
  //       );
  //       console.log("Nueva búsqueda:", searchTerm);
  //       setData(response.data);
  //     } catch (error) {
  //       console.error("Error al obtener los resultados de búsqueda:", error);
  //     }
  //   };

  //   if (searchTerm !== "") {
  //     fetchData();
  //   }
  // }, [searchTerm]);

  return (
    <div className={style.SearchBar}>
      <input
        className={style.input}
        value={searchTerm}
        type="text"
        placeholder="Search here..."
        onChange={handleChange}
      />
      <button className={style.button} onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
