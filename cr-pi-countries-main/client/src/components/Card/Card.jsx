import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, img, continent }) => {
  return (
    <div className={style.container}>
      <Link to={`/detail/${id}`}>
        <img className={style.cardImage} src={img} alt="" />
        <p>Name: {name} </p>
        <p>Continent: {continent}</p>
      </Link>
    </div>
  );
};

export default Card;
