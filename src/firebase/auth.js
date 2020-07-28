import { firebaseAuth } from "./initFirebase";
import { removeUser } from "../util/local";

// const auth = (email, pwd) =>
//   firebaseAuth().createUserWithEmailAndPassword(email, pwd).then(saveUser);

const login = (email, pwd) =>
  firebaseAuth().signInWithEmailAndPassword(email, pwd);

const logout = () => {
  firebaseAuth().signOut();
  removeUser();
  window.location = "/home"
};

const resetPassword = (email) => firebaseAuth().sendPasswordResetEmail(email);

export { login, logout, resetPassword };
