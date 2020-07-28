import React from "react";
import style from "./index.module.scss";
import LazyLoad from "react-lazy-load";

const Brands = ({ title }) => (
  <section>
    <h1 className="titleSection">{title}</h1>
    <article className={style.brands}>
      <a href="https://google.com ">
        <LazyLoad >
          <img
            className={style.logo}
            src="https://picsum.photos/200"
            alt="nombre de la marca"
          />
        </LazyLoad>
      </a>
      <a href="https://google.com ">
        <LazyLoad>
          <img
            className={style.logo}
            src="https://picsum.photos/200"
            alt="nombre de la marca"
          />
        </LazyLoad>
      </a>
      <a href="https://google.com ">
        <LazyLoad>
          <img
            className={style.logo}
            src="https://picsum.photos/200"
            alt="nombre de la marca"
          />
        </LazyLoad>
      </a>
      <a href="https://google.com ">
        <LazyLoad>
          <img
            className={style.logo}
            src="https://picsum.photos/200"
            alt="nombre de la marca"
          />
        </LazyLoad>
      </a>
      <a href="https://google.com ">
        <LazyLoad>
          <img
            className={style.logo}
            src="https://picsum.photos/200"
            alt="nombre de la marca"
          />
        </LazyLoad>
      </a>
      <a href="https://google.com ">
        <LazyLoad>
          <img
            className={style.logo}
            src="https://picsum.photos/200"
            alt="nombre de la marca"
          />
        </LazyLoad>
      </a>
    </article>
  </section>
);

export default Brands;
