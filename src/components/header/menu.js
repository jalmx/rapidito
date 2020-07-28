import React from "react";
import { NavLink } from "react-router-dom";
import uid from "uid";
import menu from "./menu.json";
import style from "./menu.module.scss";
import "hamburgers/dist/hamburgers.min.css";
import "./hamburger";
import { logout } from "../../firebase/auth";
import { getUser } from "../../util/local";

const Menu = (props) => (
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
      {menu.map((link) => (
        <li key={uid(10)} className={style.menuItem}>
          <NavLink
            to={`/${link.toLowerCase()}`}
            className={style.link}
            activeClassName={style.linkActive}
          >
            {link}
          </NavLink>
        </li>
      ))}
      <li key={uid(10)} className={style.menuItem}>
        {getUser() ? (
          <>
            <NavLink
              to="/admin"
              className={style.link}
              activeClassName={style.linkActive}
            >
              Admin
            </NavLink>
          </>
        ) : (
          <></>
        )}
      </li>
      <li key={uid(10)} className={style.menuItem}>
        {getUser()? (
          <>
            <NavLink
              to="/logout"
              className={style.link}
              activeClassName={style.linkActive}
              onClick={logout}
            >
              Logout
            </NavLink>
          </>
        ) : (
          <NavLink
            to="/login"
            className={style.link}
            activeClassName={style.linkActive}
          >
            Login
          </NavLink>
        )}
      </li>
    </ul>
  </nav>
);

export default Menu;
