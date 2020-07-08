import React from "react";
import style from './index.module.scss'

const Brands = ({ title }) => (
  <section>
    <h1 className="titleSection">{title}</h1>
    <article className={style.brands}>
    <a href="https://google.com ">
      <img className={style.logo} src="https://picsum.photos/200" alt="nombre de la marca" />
    </a>
    <a href="https://google.com ">
      <img className={style.logo} src="https://picsum.photos/200" alt="nombre de la marca" />
    </a>
    <a href="https://google.com ">
      <img className={style.logo} src="https://picsum.photos/200" alt="nombre de la marca" />
    </a>
    <a href="https://google.com ">
      <img className={style.logo} src="https://picsum.photos/200" alt="nombre de la marca" />
    </a>
    <a href="https://google.com ">
      <img className={style.logo} src="https://picsum.photos/200" alt="nombre de la marca" />
    </a>
    <a href="https://google.com ">
      <img className={style.logo} src="https://picsum.photos/200" alt="nombre de la marca" />
    </a> 
    </article>
  </section>
);

export default Brands;
