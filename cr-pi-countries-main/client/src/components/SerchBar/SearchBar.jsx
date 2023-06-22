import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByName } from "../../redux/action";
import style from "./SearchBar.module.css";

const SearchBar = (props) => {
  const { setData, setCurrentPage } = props;
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
    setCurrentPage(1);
  };

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
