import React, { useState } from "react";
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
import { savePost, updatePost, getPost } from "../../firebase/post";
import { saveProduct, updateProduct, getProduct } from "../../firebase/product";
import { getDate } from "../../util/date";

const dataProducto = () => (
  <div>
    <input type="number" placeholder="Precio" id="price" min="0" />
    <input type="number" placeholder="Estrellas" id="start" max="5" min="1" step="1" />
  </div>
);

const EditorRapidito = (props) => {
  const { title } = props;
  const [state, setState] = useState({
    editorState: EditorState.createEmpty(),
    onHTML: "",
    content: "",
    price: 0,
    start: 5,
  });

  const onEditorStateChange = (editorState) => {
    setState({
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

  const onHTMLtoDraft = () => {
    // tomo el HTML y lo paso a Draft
    const blocksFromHTML = convertFromHTML(state.onHTML);
    const stateNew = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );

    setState({
      ...state,
      editorState2: EditorState.createWithContent(stateNew),
    });
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
      .catch((err) => console.log("Fallo subir el post"));
  };

  const onSaveProduct = () => {
    let product = {};
    product.title =
      document.getElementsByName("title")[0].value.trim() ||
      "Sin titulo de producto";
    product.imgUrl =
      document.getElementsByName("imgUrl")[0].value.trim() ||
      "https://lh5.googleusercontent.com/m_ETa2hMH1bjNlJaHfjvw4yAOFsQfGJOl1Xsc-_6UbxufTYuB8avJo8F6in8P7ZBVpysngUhMNy35i2-Wf0T=w790-h725";
    product.body = getDrafttoHTML() || "";
    product.abstract = state.content;
    product.date = getDate();
    product.price = Number(document.getElementById("price").value.trim()) || 0
    product.start = Number(document.getElementById("start").value.trim()) || 5

    saveProduct(product)
      .then((err) =>
        err
          ? alert("Fallo subir el producto")
          : (() => {
              alert("Producto guardado");
              return (window.location = "/admin");
            })()
      )
      .catch((err) => console.log("Fallo subir el Product"));
  };

  const onSave = (type) => {
    console.log(type)
    type.toLowerCase() === "producto" ? onSaveProduct() : onSavePost();
  };

  return (
    <div className={style.editorContainer}>
      <h1>
        Escribiendo nuevo <span>"{title}"</span>
      </h1>
      <div>
        <input type="text" name="title" placeholder={`Titulo del ${title}`} />
        <input
          type="url"
          name="imgUrl"
          placeholder={`Dirección de la imagen`}
        />
        <input type="file" hidden/>
        {title.toLowerCase() === "producto" ? dataProducto() : ""}
      </div>
      <div className={style.editor}>
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
      <div className="btn_group">
        <button onClick={onCancel} className="button_cancel">
          Cancelar
        </button>
        <button onClick={() => onSave(title)}>Agregar</button>
      </div>
    </div>
  );
};

export default EditorRapidito;
