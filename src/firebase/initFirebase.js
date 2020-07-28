import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/database";

import firebaseConfig from "./config";

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
 