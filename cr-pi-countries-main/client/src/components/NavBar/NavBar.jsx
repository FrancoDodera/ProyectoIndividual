import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <NavLink to="/home">
        <button className={style.button}>HOME</button>
      </NavLink>
      <NavLink to="/form">
        <button className={style.button}>FORM</button>
      </NavLink>
    </div>
  );
};

export default NavBar;
