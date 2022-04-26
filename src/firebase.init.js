// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjbleXchtUFnfGxxoUvdEden-E5Kto6R4",
  authDomain: "photographer-guy-a10.firebaseapp.com",
  projectId: "photographer-guy-a10",
  storageBucket: "photographer-guy-a10.appspot.com",
  messagingSenderId: "38654707111",
  appId: "1:38654707111:web:f2adc2d6729337fd57e282",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
