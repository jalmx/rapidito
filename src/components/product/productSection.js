import React, { useState, useEffect } from "react";

import Card from "./index";
import uid from "uid";
import { getAllProduct } from "../../firebase/product";

const style = {
  display: "flex",
  flexWrap: "wrap",
};

const ProductoSection = ({ title, admin }) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    getAllProduct().then((product) => setState(product));

    return () => {};
  }, []);

  return (
    <>
      <section>
        {title ? <h1 className="titleSection">{title} </h1> : ""}
        <article style={style}>
          {state.map((product) => (
            <Card key={uid(10)} {...product} admin={admin} />
          ))}
        </article>
      </section>
    </>
  );
};
export default ProductoSection;
