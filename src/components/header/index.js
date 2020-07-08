import React from "react";
import style from "./index.module.scss";
import Menu from "./menu";
import logo from "../../img/logo.svg";

const Header = () => (
  <header className={style.header}>
    <img className={style.logo} src={logo} alt="logo rapidito" />
    <h1 className={style.titleHeader}>Rapidito</h1>
    <Menu />
  </header>
);
export default Header;
