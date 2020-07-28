import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazy-load";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import { generateUrl } from "../../util/constant";
import { deletePost as postDelete, getPost } from "../../firebase/post";

const deletePost = (id) => {
  postDelete(id);
  alert("Post eliminado");
  window.location = "/admin";
};

//TODO: update post en el admin
const editPost = (id) => getPost(id).then((d) => /*console.log(d) */ null);

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
        <div>{/* <span>Fecha: {statePost.date}</span> */}</div>
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
            <button onClick={() => editPost(statePost.id)}>
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
