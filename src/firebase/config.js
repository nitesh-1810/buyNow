import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//Your web app's Firebase Configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "buynow-751e0.firebaseapp.com",
  projectId: "buynow-751e0",
  storageBucket: "buynow-751e0.appspot.com",
  messagingSenderId: "894272223320",
  appId: "1:894272223320:web:33afb799a843d3f787b22d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
