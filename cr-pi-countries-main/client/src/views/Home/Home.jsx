import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Pagination from "../../components/Pagination/Pagination";

import { getCountries } from "../../redux/action";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Cantidad de países por página

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <CardsContainer
        countries={countries}
        currentPage={currentPage}
        pageSize={pageSize}
      />
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalItems={countries.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
