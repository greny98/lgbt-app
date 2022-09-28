// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyC1jWZI3yH5cxbeMMs5nsY44fA6kAnl6Kg",
  authDomain: "lgbt-app-fea12.firebaseapp.com",
  projectId: "lgbt-app-fea12",
  storageBucket: "lgbt-app-fea12.appspot.com",
  messagingSenderId: "560720405187",
  appId: "1:560720405187:web:47cbf2e1d410d74d3cf876",
  measurementId: "G-84N288JTYC",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);