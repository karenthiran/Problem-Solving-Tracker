// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importing Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADwWilxDV4KlBSfK02v1FDi5cu2qLjVC4",
  authDomain: "problemsolvetrack.firebaseapp.com",
  projectId: "problemsolvetrack",
  storageBucket: "problemsolvetrack.firebasestorage.app",
  messagingSenderId: "790552626079",
  appId: "1:790552626079:web:07e08451ca2ca27d51b3aa",
  measurementId: "G-12XR0DZ9Z6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

// Initialize Analytics (if you're using it)
const analytics = getAnalytics(app);

// Export auth for use in other parts of your app
export { analytics, auth };

