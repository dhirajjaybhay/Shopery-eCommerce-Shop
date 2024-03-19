import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDHPqF9X_YV9Rn8uSXyR2dbrZTr-1KW7x4",
  authDomain: "ecobazar-ecommerce-websi-19113.firebaseapp.com",
  projectId: "ecobazar-ecommerce-websi-19113",
  storageBucket: "ecobazar-ecommerce-websi-19113.appspot.com",
  messagingSenderId: "256114932368",
  appId: "1:256114932368:web:0cb0bc896afc5880dbf615",
  measurementId: "G-ESBR8YLPB9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth}