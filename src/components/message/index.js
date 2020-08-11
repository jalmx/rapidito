import React from "react";
import style from "./index.module.scss";
import { deleteMessage } from "../../firebase/messages";

const deleteMessageFromPanel = (id, cb) => {
  deleteMessage(id);
  alert("Mensaje eliminado");
  if (cb) cb();
};

const Message = ({
  id,
  name,
  tel,
  mail,
  message,
  date,
  read,
  onMarkRead,
  onDeleteMessage,
}) => (
  <div className={style.message} id={id}>
    <div>
      Id: <span>{id}</span>
    </div>
    <div>
      Fecha: <span>{date.year}</span>
    </div>
    <div>
      Nombre: <span>{name}</span>
    </div>
    <div>
      Teléfono:
      <i className="icon-phone">
        <a href={`telto:${tel}`}>{tel}</a>
      </i>
    </div>
    <div>
      Correo: <a href={`mailto:${mail}`}>{mail}</a>
    </div>
    <div>
      Mensaje: <span>{message}</span>
    </div>
    <div className="btn_group">
      <button
        className="button_cancel"
        onClick={() => {
          deleteMessageFromPanel(id, onDeleteMessage);
        }}
      >
        Eliminar
      </button>
      {read ? "" : <button onClick={() => onMarkRead(id)}>Leído</button>}
    </div>
  </div>
);

export default Message;
