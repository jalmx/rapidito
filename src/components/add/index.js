import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import style from "./index.module.scss";
import { savePost, updatePost } from "../../firebase/post";
import { saveProduct, updateProduct } from "../../firebase/product";
import { getDate } from "../../util/date";
import { EDIT_POST, generataAbstract, PHOTO_URL } from "../../util/constant";

let info = null;
const dataProducto = () => (
  <div>
    <input type="number" placeholder="Precio" id="price" min="0" />
    <input
      type="number"
      placeholder="Estrellas"
      id="start"
      max="5"
      min="1"
      step="1"
    />
  </div>
);

const EditorRapidito = (props) => {
  const {
    title,
    data: { type, data },
  } = props;
  info = data;
  const [state, setState] = useState({
    editorState: EditorState.createEmpty(),
    onHTML: "",
    content: "",
    price: 0,
    start: 5,
  });

  const loadData = (data) => {
    document.getElementById("title").value = data.title;
    document.getElementById("imgUrl").value = data.imgUrl;
    onHTMLtoDraft(data.body);
    if (data.price) {
      document.getElementById("price").value = data.price;
      document.getElementById("start").value = data.start;
    }
  };

  useEffect(() => {
    if (data) {
      loadData(data);
    }
    return () => {};
  }, []);

  const onEditorStateChange = (editorState) => {
    setState({
      ...state,
      editorState,
      onHTML: draftToHtml(convertToRaw(state.editorState.getCurrentContent())),
      content: state.editorState.getCurrentContent().getPlainText(),
    });
  };

  const onCancel = () => {
    window.location = "/admin";
  };
  const getDrafttoHTML = () => {
    //obtengo el html del Editor
    return draftToHtml(convertToRaw(state.editorState.getCurrentContent()));
  };

  const onHTMLtoDraft = (html) => {
    const blocksFromHTML = convertFromHTML(html);
    const stateNew = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    onEditorStateChange(EditorState.createWithContent(stateNew));
  };

  const getPostFromUI = () => {
    let post = {};
    if (info) post.id = info.id;
    post.title =
      document.getElementsByName("title")[0].value.trim() ||
      "Sin titulo de post";
    post.imgUrl = info
      ? info.imgUrl
      : document.getElementsByName("imgUrl")[0].value.trim() || PHOTO_URL;
    post.body = getDrafttoHTML() || "";
    post.abstract = generataAbstract(state.content);
    post.date = getDate();
    return post;
  };

  const getProductFromUI = () => {
    let product = {};
    if (info) product.id = info.id;
    product.title =
      document.getElementsByName("title")[0].value.trim() ||
      "Sin titulo de producto";
    product.imgUrl = info
      ? info.imgUrl
      : document.getElementsByName("imgUrl")[0].value.trim() || PHOTO_URL;
    product.body = getDrafttoHTML() || "";
    product.abstract = generataAbstract(state.content);
    product.date = getDate();
    product.price = Number(document.getElementById("price").value.trim()) || 0;
    product.start = Number(document.getElementById("start").value.trim()) || 5;
    return product;
  };

  const onSavePost = () => {
    savePost(getPostFromUI())
      .then((err) =>
        err
          ? alert("Fallo subir el post")
          : (() => {
              alert("Post guardado");
              return onCancel();
            })()
      )
      .catch(() => alert("Fallo subir el post"));
  };

  const onSaveProduct = () => {
    saveProduct(getProductFromUI())
      .then((err) =>
        err
          ? alert("Fallo subir el producto")
          : (() => {
              alert("Producto guardado");
              return onCancel();
            })()
      )
      .catch(() => alert("Fallo subir el Product"));
  };

  const onSave = (type) => {
    type.toLowerCase() === "producto" ? onSaveProduct() : onSavePost();
  };

  const onUpdatePost = () => {
    updatePost(getPostFromUI()).then((err) =>
      err
        ? alert("Fallo actualizar el post, llamar a soporte técnico")
        : onCancel()
    );
  };
  const onUpdateProduct = () => {
    updateProduct(getProductFromUI()).then((err) =>
      err
        ? alert("Fallo actualizar el producto, llamar a soporte técnico")
        : onCancel()
    );
  };

  const onUpdate = (type) => {
    console.log("update", type);
    type === EDIT_POST ? onUpdatePost() : onUpdateProduct();
  };

  return (
    <div id="editContainer" className={style.editorContainer}>
      <h1>
        Escribiendo nuevo <span>"{title}"</span>
      </h1>
      <div>
        <input
          id="title"
          type="text"
          name="title"
          placeholder={`Titulo del ${title}`}
        />
        <input
          type="url"
          id="imgUrl"
          name="imgUrl"
          placeholder={`Dirección de la imagen`}
        />
        <input type="file" id="imgFile" />
        {title.toLowerCase() === "producto" ? dataProducto() : ""}
      </div>
      <div className={style.editor}>
        <Editor
          id="editor"
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          onEditorStateChange={onEditorStateChange}
          editorState={state.editorState}
        />
      </div>
      <div className="btn_group">
        <button onClick={onCancel} className="button_cancel">
          Cancelar
        </button>
        <button onClick={() => (data ? onUpdate(type) : onSave(title))}>
          {data ? "Actualizar" : "Agregar"}
        </button>
      </div>
    </div>
  );
};

export default EditorRapidito;
