import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgkl94QmYAAfz4xGRdyQNCWMOBU5ZYhQk",
  authDomain: "appsuperbet-33e39.firebaseapp.com",
  projectId: "appsuperbet-33e39",
  storageBucket: "appsuperbet-33e39.appspot.com",
  messagingSenderId: "313043480351",
  appId: "1:313043480351:web:79f63add28ae0ccc984a2a",
  measurementId: "G-JZKH24GDLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
