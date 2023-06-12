import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/action";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <>
      <h1>Esta es la vista de la Home</h1>
      <CardsContainer />
    </>
  );
};

export default Home;
