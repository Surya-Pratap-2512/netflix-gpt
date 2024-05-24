// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlWs4ODT9xNERbXjRGjAlf_JcxIKJMn-M",
  authDomain: "netflixgpt-86f84.firebaseapp.com",
  projectId: "netflixgpt-86f84",
  storageBucket: "netflixgpt-86f84.appspot.com",
  messagingSenderId: "342865130160",
  appId: "1:342865130160:web:c1e05b6ffaf44bd5050175",
  measurementId: "G-TSKM05WG3R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
