import React, { useState, useEffect } from "react";
import uid from "uid";

import { getAllPost } from "../../firebase/post";
import Editor from "../add/";
import MessageSection from "../message/MessageSection";
import Post from "../blog/";
import Products from "../product/productSection";

import style from "./index.module.scss";
import { EDIT_POST } from "../../util/constant";

const menu = ["Post", "Productos", "Mensajes"];

const getSection = (index, onEditor, type, onEdit, data) => {
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
            onEdit={onEdit}
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
        <Products admin onEdit={onEdit} />
      </>
    );
  } else if (index === 2) {
    component = <MessageSection />;
  } else if (index === 3 || index === 4) {
    component = (
      <Editor
        title={index === 3 ? "Post" : "Producto"}
        type={data.type}
        data={data}
      />
    );
  }

  return component;
};

const Admin = (props) => {
  const [state, setstate] = useState(0); //sections changes
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState({});

  const onSection = (e) => {
    let section = 0; //post
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

  //** Elijo que va a cargar el edit*/
  const onEdit = (data) => {
    setData(data);
    setstate(data.type === EDIT_POST ? 3 : 4);
  };

  useEffect(() => {
    getAllPost().then((postsList) => setPosts(postsList));
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
      {getSection(state, onEditor, { posts }, onEdit, data)}
    </div>
  );
};

export default Admin;
