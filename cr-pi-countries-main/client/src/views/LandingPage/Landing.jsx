import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>Welcome to the World</h1>
      <div>
        <Link to="/home">
          <button className={style.button}>START</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
