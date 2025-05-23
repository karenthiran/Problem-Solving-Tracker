// firebase.js
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ← Add this line

const firebaseConfig = {
  apiKey: "AIzaSyADwWilxDV4KlBSfK02v1FDi5cu2qLjVC4",
  authDomain: "problemsolvetrack.firebaseapp.com",
  projectId: "problemsolvetrack",
  storageBucket: "problemsolvetrack.firebasestorage.app",
  messagingSenderId: "790552626079",
  appId: "1:790552626079:web:07e08451ca2ca27d51b3aa",
  measurementId: "G-12XR0DZ9Z6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app); // ← Add this line

export { analytics, auth, db };
