import React from "react";
import { NavLink } from "react-router-dom";
import menu from "./menu.json";
import style from "./menu.module.scss";
import "hamburgers/dist/hamburgers.min.css";
import "./hamburger";

const Menu = () => (
  <nav>
    <button
      id="hamburger"
      className={`hamburger hamburger--collapse hidden ${style.hamburger}`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
    <ul id="menu" className={`${style.menu}`}>
      {menu.map((link, i) => (
        <li key={i} className={style.menuItem}>
          <NavLink
            to={`/${link.toLowerCase()}`}
            className={style.link}
            activeClassName={style.linkActive}
          >
            {link}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
