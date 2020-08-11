import { BrowserRouter } from "react-router-dom";
import React from "react";

import "normalize.css/normalize.css";

import './firebase/initFirebase'
import Router from "./components/Router";

import './font/font.scss'
import "./App.scss";

const App = () => (
  <>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </>
);

export default App;
