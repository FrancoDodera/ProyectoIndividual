import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import img from "../../assets/homeImage.png";
const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.imgContainer}>
        <NavLink to="/">
          <img className={style.img} src={img} alt="" />
        </NavLink>
      </div>
      <div className={style.buttonContainer}>
        <NavLink to="/home">
          <button className={style.button}>HOME</button>
        </NavLink>
        <NavLink to="/form">
          <button className={style.button}>FORM</button>
        </NavLink>
        <NavLink to="/about">
          <button className={style.button}>ABOUT</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
