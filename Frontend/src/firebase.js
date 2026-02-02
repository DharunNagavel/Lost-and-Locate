import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAvUkZQWVwzY-gijoKUxNYj5BPfRxi4aLE",
  authDomain: "lost-and-locate-fe893.firebaseapp.com",
  projectId: "lost-and-locate-fe893",
  storageBucket: "lost-and-locate-fe893.firebasestorage.app",
  messagingSenderId: "260208580833",
  appId: "1:260208580833:web:b28ac95906fede20c1ffa0",
  measurementId: "G-DVD9JW350W",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
