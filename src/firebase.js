
import { initializeApp } from "firebase/app";
import {getAuth, FacebookAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0AusvAjnakhdmQ0s1IoQtiun8R7nW32c",
  authDomain: "social-97eb6.firebaseapp.com",
  projectId: "social-97eb6",
  storageBucket: "social-97eb6.appspot.com",
  messagingSenderId: "842746201816",
  appId: "1:842746201816:web:e244a88e1ec91fa79a79ad",
  measurementId: "G-777N692XZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new FacebookAuthProvider()
const google=new GoogleAuthProvider()
export {auth,provider,google}
