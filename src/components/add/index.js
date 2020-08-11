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
import { EDIT_POST, EDIT_PRODUCT } from "../../util/constant";

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
  const [state, setState] = useState({
    editorState: EditorState.createEmpty(),
    onHTML: "",
    content: "",
    price: 0,
    start: 5,
  });

  const loadData = (data) => {
    console.log("loadData", data);
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

  const onSavePost = () => {
    let post = {};
    post.title =
      document.getElementsByName("title")[0].value.trim() ||
      "Sin titulo de post";
    post.imgUrl =
      document.getElementsByName("imgUrl")[0].value.trim() ||
      "https://lh5.googleusercontent.com/m_ETa2hMH1bjNlJaHfjvw4yAOFsQfGJOl1Xsc-_6UbxufTYuB8avJo8F6in8P7ZBVpysngUhMNy35i2-Wf0T=w790-h725";
    post.body = getDrafttoHTML() || "";
    post.abstract = state.content;
    post.date = getDate();

    savePost(post)
      .then((err) =>
        err
          ? alert("Fallo subir el post")
          : (() => {
              alert("Post guardado");
              return (window.location = "/admin");
            })()
      )
      .catch(() => alert("Fallo subir el post"));
  };

  const onSaveProduct = () => {
    let product = {};
    product.title =
      document.getElementsByName("title")[0].value.trim() ||
      "Sin titulo de producto";
    product.imgUrl =
      document.getElementsByName("imgUrl")[0].value.trim() ||
      "https://firebasestorage.googleapis.com/v0/b/rapidito-gourmet.appspot.com/o/rapidito%2Flogo_Rapidito_card.png?alt=media&token=e1735353-824b-4f1f-ace3-67f19f6c529c";
    product.body = getDrafttoHTML() || "";
    product.abstract = state.content;
    product.date = getDate();
    product.price = Number(document.getElementById("price").value.trim()) || 0;
    product.start = Number(document.getElementById("start").value.trim()) || 5;

    saveProduct(product)
      .then((err) =>
        err
          ? alert("Fallo subir el producto")
          : (() => {
              alert("Producto guardado");
              return (window.location = "/admin");
            })()
      )
      .catch((err) => alert("Fallo subir el Product"));
  };

  const onSave = (type) => {
    type.toLowerCase() === "producto" ? onSaveProduct() : onSavePost();
  };

  const onUpdatePost = () => {
    updatePost();
  };
  const onUpdateProduct = () => {
    updateProduct();
  };

  const onUpdate = (element) => {
    data.type === EDIT_POST ? onUpdatePost(element) : onUpdateProduct(element);
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
        <button onClick={() => (data ? onSave(title) : onUpdate())}>
          {data ? "Actualizar" : "Agregar"}
        </button>
      </div>
    </div>
  );
};

export default EditorRapidito;
