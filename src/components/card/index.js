import React from "react";
import style from "./index.module.scss";

const Card = (props) => {
  const { id, title, description, src } = props.data;

  const alt = description;

  return (
    <figure key={id} className={style.card}>
      <img src={src} alt={alt} className={style.img} loading="lazy" />
      <div className={style.bodyCard}>
        <h6 className={style.title}>{title}</h6>
        <figcaption className={style.description}>{description}</figcaption>
      </div>
      <div className={style.btnContainer}>
        <button className={style.btn}>Ver más</button>
      </div>
    </figure>
  );
};

export default Card;
