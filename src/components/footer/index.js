import React from "react";
import { NavLink, Link } from "react-router-dom";
import style from "./index.module.scss";
import "./font/icons.mudule.css";
import logo from "../../img/logo_white.svg";
import menu from "../header/menu.json";
import socialNetwork from "./socialntetwork.json";

const Footer = () => (
  <footer className={style.footer}>
    <div className={style.section}>
      <ul id="menu" className={`${style.menu}`}>
        {menu.map((link, i) => (
          <li key={i * 4}>
            <NavLink
              to={`/${link.toLowerCase()}`}
              activeClassName={style.linkActive}
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
    <Link to="/" style={{display:"block", textAlign:"center"} }>
      <img src={logo} alt="logo rapidito" className={style.img} />
    </Link>
    <ul id="menu" className={`${style.menu}`}>
      {socialNetwork.map((data, i) => (
        <li key={i * 4} className={style.end}>
          <i style={{ color: "white" }} className={data.icon}></i>
          <a
            href={`${data.url.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.social}
          </a>
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;
