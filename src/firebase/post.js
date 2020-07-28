import { ref } from "./initFirebase";
const ELEMENT = "post";

const savePost = (post) => {
  const key = ref.child(`${ELEMENT}`).push().key;
  post.id = key;
  return ref
    .child(`/${ELEMENT}/${key}/`)
    .set({ ...post })
    .then((err) => (err ? err : countPost(true)));
};

const deletePost = (id) => {
  ref.child(`/${ELEMENT}/${id}`).remove();
  countPost(false);
};

const getAllPost = () =>
  ref
    .child(`/${ELEMENT}`)
    .once("value")
    .then((snapshot) => {
      let ps = [];
      snapshot.forEach((blog) => {
        ps.push(blog.val());
      });
      return ps.reverse();
    });

const getPost = (id) =>
  ref
    .child(`/${ELEMENT}/${id}`)
    .once("value")
    .then((post) => post.val());

const updatePost = (post) => {};

const countPost = (type) => {
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

export { savePost, deletePost, getAllPost, getPost, updatePost };
