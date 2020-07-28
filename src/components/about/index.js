import React from "react";
import photo from "../../img/photo_cake.jpg";
import LazyLoad from "react-lazy-load";
import style from "./index.module.scss";

const AboutUs = () => (
  <section>
    <h1 className="titleSection">Sobre nosotros</h1>
    <div className={style.main}>
      <p>
        Sunt occaecat qui nisi qui dolore dolor incididunt elit id ipsum. Minim
        culpa culpa id deserunt. Ullamco enim proident id commodo dolor non id
        tempor duis. Cillum quis pariatur fugiat incididunt laborum dolor
        commodo occaecat cupidatat adipisicing nulla. Do velit ea occaecat
        occaecat consequat adipisicing dolor proident consequat minim irure
        nostrud. Nulla dolore amet dolor laborum aute exercitation dolore veniam
        deserunt cupidatat aliqua adipisicing proident. Elit id minim fugiat
        magna magna consequat aliquip eiusmod ad ipsum elit consectetur.
      </p>
      <LazyLoad>
        <img src={photo} alt="cake" />
      </LazyLoad>
    </div>
  </section>
);

export default AboutUs;

//  loading="lazy"
