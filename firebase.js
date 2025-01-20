// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVmgILguUBFVwBTkg4yyVm6wvSYM7M87U",
  authDomain: "tjp-2025.firebaseapp.com",
  projectId: "tjp-2025",
  storageBucket: "tjp-2025.firebasestorage.app",
  messagingSenderId: "544077846507",
  appId: "1:544077846507:web:e301f97ae9a424ea7f2bae",
  measurementId: "G-DR42S5QLH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);