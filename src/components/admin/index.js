import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import uid from "uid";

import Post from "../blog/";
import Products from "../product/productSection";
import Message from "../message/";
import Editor from "../add/";

import { getAllPost } from "../../firebase/post";

import messages from "../message/_messages";
import MessageSection from "../message/MessageSection";
const menu = ["Post", "Productos", "Mensajes"];

const getSection = (index, onEditor, type) => {
  let component = null;
  if (index === 0) {
    component = (
      <section>
        <button className={style.add} onClick={onEditor}>
          Agregar Post
        </button>
        {type.posts.map((blog) => (
          <Post
            key={uid(10)}
            {...blog}
            more="Ver más"
            edit="Editar"
            eliminar="Eliminar"
          />
        ))}
      </section>
    );
  } else if (index === 1) {
    component = (
      <>
        <button className={style.add} onClick={onEditor}>
          Agregar Producto
        </button>
        <Products admin />
      </>
    );
  } else if (index === 2) {
    component = <MessageSection />
  } else if (index === 3 || index === 4) {
    component = <Editor title={index === 3 ? "Post" : "Producto"} />;
  }

  return component;
};

const Admin = (props) => {
  const [state, setstate] = useState(0); //sections changes
  const [posts, setPosts] = useState([]);

  const onSection = (e) => {
    let section = 0;
    if (e.target.id === "productos") {
      section = 1;
    }
    if (e.target.id === "mensajes") {
      section = 2;
    }
    setstate(section);
  };
  const onEditor = (e) => {
    setstate(e.target.textContent.indexOf("Post") > 0 ? 3 : 4);
  };

  useEffect(() => {
    getAllPost().then((postsList) => setPosts(postsList));
    //TODO: agregar los mensajes
    return () => {};
  }, []);

  return (
    <div className={style.admin}>
      <h1>{props.title}</h1>
      <nav id="menu-admin">
        {menu.map((link) => (
          <h2
            key={uid(10)}
            className={style.menu_link}
            onClick={onSection}
            id={link.toLowerCase()}
          >
            {link}
          </h2>
        ))}
      </nav>
      {getSection(state, onEditor, { posts })}
    </div>
  );
};

export default Admin;
