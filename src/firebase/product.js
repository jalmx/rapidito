import { ref } from "./initFirebase";
const ELEMENT = "products";

const saveProduct = (product) => {
  const key = ref.child(`${ELEMENT}`).push().key;
  product.id = key;
  return ref
    .child(`/${ELEMENT}/${key}/`)
    .set({ ...product })
    .then((err) => (err ? err : countProduct(true)));
};

const deleteProduct = (id) => {
  ref.child(`/${ELEMENT}/${id}`).remove();
  countProduct(false);
};

const getAllProduct = () =>
  ref
    .child(`/${ELEMENT}`)
    .once("value")
    .then((snapshot) => {
      let ps = [];
      snapshot.forEach((element) => {
        ps.push(element.val());
      });
      return ps.reverse();
    });

const getProduct = (id) =>
  ref
    .child(`/${ELEMENT}/${id}`)
    .once("value")
    .then((product) => product.val());

const updateProduct = (product) =>
  ref.child(`${ELEMENT}/${product.id}/`).update(product);

const countProduct = (type) => {
  const path = `/counter/${ELEMENT}/`;
  return ref
    .child(path)
    .once("value")
    .then((snapshot) => {
      let value = Number(snapshot.val());
      type ? value++ : value--;
      ref.child(`/counter/${ELEMENT}/`).set(value);
    });
};

export { saveProduct, deleteProduct, getAllProduct, getProduct, updateProduct };
