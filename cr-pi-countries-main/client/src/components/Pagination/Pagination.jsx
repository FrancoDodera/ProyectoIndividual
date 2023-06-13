import React from "react";
import style from "./Pagination.module.css";

const Pagination = ({ currentPage, pageSize, totalItems, onPageChange }) => {
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
