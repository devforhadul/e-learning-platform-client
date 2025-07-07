
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCenqSL3vW1gUbjRgGQdn8R1alXj0yssdo",
  authDomain: "learnisty-e-lerning-project.firebaseapp.com",
  projectId: "learnisty-e-lerning-project",
  storageBucket: "learnisty-e-lerning-project.firebasestorage.app",
  messagingSenderId: "450342411169",
  appId: "1:450342411169:web:e91b858de1f945d34189e0",
  measurementId: "G-F5ZTZ1JEDR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);