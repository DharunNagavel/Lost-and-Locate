// Import Firebase core
import { initializeApp } from "firebase/app";

// Import Firebase Auth
import { getAuth } from "firebase/auth";

// (Optional) Analytics
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvUkZQWVwzY-gijoKUxNYj5BPfRxi4aLE",
  authDomain: "lost-and-locate-fe893.firebaseapp.com",
  projectId: "lost-and-locate-fe893",
  storageBucket: "lost-and-locate-fe893.firebasestorage.app",
  messagingSenderId: "260208580833",
  appId: "1:260208580833:web:b28ac95906fede20c1ffa0",
  measurementId: "G-DVD9JW350W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ EXPORT AUTH (THIS FIXES YOUR ERROR)
export const auth = getAuth(app);

// Optional: Analytics
export const analytics = getAnalytics(app);
