import Card from "../Card/Card";
import style from "./CardContainer.module.css";
import { useSelector } from "react-redux";
const CardsContainer = () => {
  const countries = useSelector((state) => state.countries);
  return (
    <div className={style.container}>
      {countries.map(({ id, name, img, continent }) => {
        return (
          <Card key={id} id={id} name={name} img={img} continent={continent} />
        );
      })}
    </div>
  );
};

export default CardsContainer;
