import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, img, continent }) => {
  return (
    <div className={style.container}>
      <Link to={`/detail/${id}`}>
        <div className={style.imageContainer}>
          <img className={style.cardImage} src={img} alt="" />
        </div>
        <h3 className={style.h3}> {name} </h3>
        <p className={style.p}> {continent}</p>
      </Link>
    </div>
  );
};

export default Card;
