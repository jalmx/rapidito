import React from "react";
import style from "./index.module.scss";
import Menu from "./menu";
import logo from "../../img/logo.svg";

const Header = (props) => (
  <header className={style.header}>
    <img className={style.logo} src={logo} alt="logo rapidito" />
    <h1 className={style.titleHeader}>Rapidito Gourmet</h1>
    <Menu {...props} />
  </header>
);
export default Header;
