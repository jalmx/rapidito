import React from "react";
import style from "./index.module.scss";

const Login = ({ location: { state } }) => {
  return (
    <>
      <form className={style.form} onSubmit={state.onHandlerLogIn}>
        <h1 className="titleSection">Login</h1>
        <input
          type="email"
          name="user"
          placeholder="Usuario"
          className={style.input}
          required
        />
        <input
          type="password"
          name="pwd"
          placeholder="Contraseña"
          className={style.input}
          required
        />
        <input
          type="submit"
          name="submit"
          value="Iniciar Sesión"
          className={style.input}
        />
      </form>
    </>
  );
};

export default Login;

// blog@rapidito.com
// pwd: 1-8
