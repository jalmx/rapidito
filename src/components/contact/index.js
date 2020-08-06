import React from "react";
import style from "./index.module.scss";
import "../footer/font/icons.mudule.css";
import { saveMessage } from "../../firebase/messages";
import { getDate } from "../../util/date";

const onMessage = (event) => {
  event.preventDefault();
  const [name, phone, email, message] = event.target;

  const messages = {
    name: name.value,
    mail: email.value,
    tel: phone.value,
    message: message.value,
    read: false,
    date: getDate()
  };
  saveMessage(messages).then((err) => {
    if (err)
      alert(
        "Error al envíar el mensaje, por favor contantar a los número de teléfono"
      );
    else {
      alert("Gracias por su mensaje, se ha envíado");
      window.location = "/"
    }
  });
};

const Contact = ({ title }) => (
  <section>
    <h1 className="titleSection">{title} </h1>
    <article className={style.section}>
      <form className={style.part} onSubmit={onMessage}>
        <input type="text" placeholder="Nombre" name="name" required />
        <input type="tel" placeholder="Teléfono" name="phone" required />
        <input type="email" placeholder="Correo" name="email" required />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Mensaje"
          required
        />
        <input type="submit" value="Envíar" />
      </form>
      <section className={style.part}>
        <h2 className={style.title}>Teléfonos</h2>
        <div>
          <div>
            <a
              style={{
                textDecoration: "none",
              }}
              href="tel:92121178220"
            >
              <h3 className={style.phone}>
                {" "}
                <i className={"icon-phone"}></i>921-217-82-20
              </h3>{" "}
            </a>
          </div>
          <div>
            <a
              href="https://wa.me/529212609782"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <h3 className={style.phone}>
                <i className={"icon-whatsapp"}></i>921-260-97-82
              </h3>
            </a>
          </div>
        </div>
      </section>
    </article>
  </section>
);

export default Contact;
