// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyte-kKMJ768-_fxzf7l00paGuF9-DBIk",
  authDomain: "investment-platform-17783.firebaseapp.com",
  projectId: "investment-platform-17783",
  storageBucket: "investment-platform-17783.appspot.com",
  messagingSenderId: "586279627117",
  appId: "1:586279627117:web:de644461d5886c2808d264",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
