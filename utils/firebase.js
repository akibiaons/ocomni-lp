import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBZ2u676I9cGWzG-qXYW-2ShlCFpqRpCn0",
  authDomain: "ocomni-lp.firebaseapp.com",
  projectId: "ocomni-lp",
  storageBucket: "ocomni-lp.appspot.com",
  messagingSenderId: "111772042543",
  appId: "1:111772042543:web:e366545c837fcbd77f8dda",
  measurementId: "G-JHN45EVTDD",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.findstore();

export { firestore };
