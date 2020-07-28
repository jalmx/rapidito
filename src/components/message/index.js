import React from "react";
import style from './index.module.scss'

const Message = ({ id, name, phone, email, message,date }) => (
  <div className={style.message} id={id}>
    <div>
      Id: <span>{id}</span>
    </div>
    <div>
      Fecha: <span>{date}</span>
    </div>
    <div>
      Nombre: <span>{name}</span>
    </div>
    <div>
      Teléfono:
      <i className="icon-phone">
        <a href={`telto:${phone}`}>{phone}</a>
      </i>
    </div>
    <div>
      Correo: <a href={`mailto:${email}`}>{email}</a>
    </div>
    <div>
      Mensaje: <span>{message}</span>
    </div>
    <div className="btn_group">
      <button className="button_cancel">Eliminar</button>
      <button>Leído</button>
    </div>
  </div>
);

export default Message;
