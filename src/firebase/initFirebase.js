import "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import firebase from "firebase/app";

import firebaseConfig from "./config";

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
 