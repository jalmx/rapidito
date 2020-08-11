import { ref } from "./initFirebase";
const ELEMENT = "messages";

const saveMessage = (messages) => {
  const key = ref.child(`${ELEMENT}`).push().key;
  messages.id = key;
  return ref.child(`/${ELEMENT}/${key}/`).set({ ...messages });
};

const deleteMessage = (id) => ref.child(`/${ELEMENT}/${id}`).remove();

const getAllMessage = () =>
  ref
    .child(`/${ELEMENT}`)
    .once("value")
    .then((snapshot) => {
      let ps = [];
      snapshot.forEach((message) => {
        ps.push(message.val());
      });
      return ps.reverse();
    });

// const getMessage = (id) =>
//   ref
//     .child(`/${ELEMENT}/${id}`)
//     .once("value")
//     .then((message) => message.val());

const updateMessage = (message) => {
  message.read = true;
  return ref.child(`/${ELEMENT}/${message.id}`).update(message);
};

// const countMessage = (type) => {
//   const path = `/counter/${ELEMENT}/`;
//   return ref
//     .child(path)
//     .once("value")
//     .then((snapshot) => {
//       let value = Number(snapshot.val());
//       type ? value++ : value--;
//       ref.child(`/counter/${ELEMENT}/`).set(value);
//     });
// };

export { saveMessage, deleteMessage, getAllMessage, updateMessage };
