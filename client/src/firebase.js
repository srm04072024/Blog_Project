// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-2024-3f7b0.firebaseapp.com",
  projectId: "blog-2024-3f7b0",
  storageBucket: "blog-2024-3f7b0.firebasestorage.app",
  messagingSenderId: "648774399190",
  appId: "1:648774399190:web:a819fa09a15e256d230577",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
