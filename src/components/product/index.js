import React from "react";
import style from "./index.module.scss";
import uid from "uid";
import LazyLoad from "react-lazy-load";

import { generateUrl } from "../../util/constant";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../firebase/product";

import { EDIT_PRODUCT } from "../../util/constant";

const deleteP = (id) => {
  deleteProduct(id);
  window.location = "/admin";
};

const Card = (props) => {
  const { title, abstract, imgUrl, body, id, admin, onEdit } = props;
  const alt = abstract;
  const path = `/productos/${generateUrl(title).toLowerCase()}`;

  const toProduct = {
    pathname: path,
    state: {
      product: {
        title: title,
        imgUrl: imgUrl,
        id: id,
        body: body,
      },
    },
  };

  return (
    <figure key={uid(10)} className={style.card}>
      <div className={style.containerImg}>
        <LazyLoad>
          <img
            src={imgUrl}
            alt={alt}
            className={style.img}
            width="344px"
            loading="lazy"
          />
        </LazyLoad>
      </div>
      <div className={style.bodyCard}>
        <h6 className={style.title}>{title}</h6>
        <figcaption className={style.description}>{abstract}</figcaption>
      </div>
      <div className="btn_group">
        {admin ? (
          <button className="button_cancel" onClick={() => deleteP(id)}>
            Eliminar
          </button>
        ) : (
          ""
        )}
        {admin ? (
          <button onClick={() => onEdit({ type: EDIT_PRODUCT, data: props })}>
            Editar
          </button>
        ) : (
          ""
        )}
        <Link to={toProduct} className="btn">
          Ver más
        </Link>
      </div>
    </figure>
  );
};

export default Card;
