// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyC4q5JWJV-avAwduH2edb_sIYSRsq9QfSE",
  authDomain: "instagramclone-b8a42.firebaseapp.com",
  projectId: "instagramclone-b8a42",
  storageBucket: "instagramclone-b8a42.appspot.com",
  messagingSenderId: "166613902384",
  appId: "1:166613902384:web:8e4ccbcf2d89eb8cbb39f5",
  measurementId: "G-YHSN0KK6LW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);