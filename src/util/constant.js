const ADD_POST = "ADD_POST";
const ADD_PRODUCT = "ADD_PRODUCT";
const EDIT_POST = "EDIT_POST";
const EDIT_PRODUCT = "EDIT_PRODUCT";

const PHOTO_URL =
  "https://firebasestorage.googleapis.com/v0/b/rapidito-gourmet.appspot.com/o/rapidito%2Flogo_Rapidito_card.png?alt=media&token=e1735353-824b-4f1f-ace3-67f19f6c529c";
const generateUrl = (title = "") => {
  return title.split(" ").join("-");
};

//334 un máximo de 334 caracteres
const generataAbstract = (text = "") => {
  if (text.length >= 334) {
    return text.substring(0, 334) + "...";
  }
  return text + "...";
};

export {
  ADD_POST,
  ADD_PRODUCT,
  EDIT_POST,
  EDIT_PRODUCT,
  generateUrl,
  generataAbstract,
  PHOTO_URL,
};
