import React, { useEffect, useState } from "react";
import style from "./Pagination.module.css";
import { useSelector } from "react-redux";

const Pagination = ({ currentPage, pageSize, totalItems, onPageChange }) => {
  const countriesGlobal = useSelector((state) => state.countries);
  const orderCountries = useSelector((state) => state.countriesByName);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (orderCountries.length > 0) {
      setCountries(orderCountries);
    } else {
      setCountries(countriesGlobal);
    }
  }, [countriesGlobal, orderCountries]);

  const totalPages = Math.ceil(totalItems / pageSize);
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className={style.container}>
      <button
        className={style.button}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Anterior
      </button>
      <h3 className={style.page}>{currentPage}</h3>
      <button
        className={style.button}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
