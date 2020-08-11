const ADD_POST = "ADD_POST";
const ADD_PRODUCT = "ADD_PRODUCT";
const EDIT_POST = "EDIT_POST";
const EDIT_PRODUCT = "EDIT_PRODUCT";

const generateUrl = (title = "") => {
  return title.split(" ").join("-");
};

//TODO:  generataAbstract
const generataAbstract = (text) => {
  // recortar el texto hasta x palabras y agregrar los puntos ...
};

export { ADD_POST, ADD_PRODUCT, EDIT_POST, EDIT_PRODUCT, generateUrl };
