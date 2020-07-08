import React from "react";
import "normalize.css/normalize.css";
import "./App.scss";
import './font/font.scss'
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
const App = () => (
  <>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </>
);

export default App;
