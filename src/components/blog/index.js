import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import React, { useState, useEffect } from "react";

import { buildDate } from "../../util/date";
import { deletePost as postDelete } from "../../firebase/post";
import { EDIT_POST } from "../../util/constant";
import { generateUrl } from "../../util/constant";

import style from "./index.module.scss";

const deletePost = (id) => {
  postDelete(id);
  alert("Post eliminado");
  window.location = "/admin";
};

const BlogSection = (props) => {
  const [statePost, setState] = useState({});

  useEffect(() => {
    setState({ ...props });
    return () => {};
  }, []);

  const path = `/blog/${generateUrl(statePost.title)}`;
  const toPost = {
    pathname: path,
    state: {
      post: {
        title: statePost.title,
        imgUrl: statePost.imgUrl,
        id: statePost.id,
        body: statePost.body,
        date: statePost.date,
      },
    },
  };
  return (
    <article className={style.post}>
      <Link to={toPost}>
        <LazyLoad width={200}>
          <img src={statePost.imgUrl} alt="foto blog" />
        </LazyLoad>
      </Link>
      <div>
        <Link to={toPost}>
          <h2>{statePost.title} </h2>
        </Link>
        <div>{<span>Fecha: {buildDate(statePost.date)}</span>}</div>
        <p>{statePost.abstract}</p>
        <div className="btn_group">
          {statePost.eliminar ? (
            <button
              className="button_cancel"
              onClick={() => deletePost(statePost.id)}
            >
              {statePost.eliminar}
            </button>
          ) : (
            ""
          )}
          {statePost.edit ? (
            <button
              onClick={() => props.onEdit({ type: EDIT_POST, data: statePost })}
            >
              {statePost.edit}
            </button>
          ) : (
            ""
          )}
          {statePost.more ? (
            <Link className="btn" to={toPost}>
              {statePost.more}
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </article>
  );
};

export default BlogSection;
