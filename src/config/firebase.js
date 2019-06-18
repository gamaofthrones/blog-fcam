import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAtzki8x2aw7QJXbqrbvR5hMhUhuNkz2z0",
  authDomain: "blog-fcam.firebaseapp.com",
  databaseURL: "https://blog-fcam.firebaseio.com",
  projectId: "blog-fcam",
  storageBucket: "blog-fcam.appspot.com",
  messagingSenderId: "301059358640",
  appId: "1:301059358640:web:5a72db5bd7eb6ab2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
