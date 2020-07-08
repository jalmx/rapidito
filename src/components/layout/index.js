import React from "react";
import Header from "../header/";

const Layout = ({ children }, props) => {
  return (
    <>
      <Header {...props} />
      {children}
    </>
  );
};

export default Layout;
