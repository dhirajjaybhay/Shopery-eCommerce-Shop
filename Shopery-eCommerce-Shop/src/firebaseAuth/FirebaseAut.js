import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvW0WDKCVlAhgN3TNcc5cS_RBIktBmyuw",
  authDomain: "e-commerce-5666a.firebaseapp.com",
  projectId: "e-commerce-5666a",
  storageBucket: "e-commerce-5666a.appspot.com",
  messagingSenderId: "514474269714",
  appId: "1:514474269714:web:57cddb89f5378a18aecccb"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };