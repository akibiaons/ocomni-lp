// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ2u676I9cGWzG-qXYW-2ShlCFpqRpCn0",
  authDomain: "ocomni-lp.firebaseapp.com",
  projectId: "ocomni-lp",
  storageBucket: "ocomni-lp.appspot.com",
  messagingSenderId: "111772042543",
  appId: "1:111772042543:web:e366545c837fcbd77f8dda",
  measurementId: "G-JHN45EVTDD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(firebaseApp);
