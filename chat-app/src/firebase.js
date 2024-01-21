import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFTLYCAk3XqSj4U1h4IOD324XC29xvjIk",
  authDomain: "chat-app-96f13.firebaseapp.com",
  projectId: "chat-app-96f13",
  storageBucket: "chat-app-96f13.appspot.com",
  messagingSenderId: "998440469748",
  appId: "1:998440469748:web:16e91aaa4e69a4522c8aa1"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const storage = getStorage();
 export const db = getFirestore();