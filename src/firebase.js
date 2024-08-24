import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

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

// Initialize Messaging
const messaging = getMessaging(app);

// Request permission to receive notifications and get the token
export const requestForToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: "BEk6nBtXhbzwYRpHJbNAchNpA2NO8eMXRIVc_B1ZnPYy10jP8dWXOLLBv0Dh_35KfrzhqJPydsOmhb5UuZ1mRxg"
    });

    if (currentToken) {
      console.log('Token received: ', currentToken);
      // Send the token to your server or save it for later use
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  } catch (error) {
    console.log('An error occurred while retrieving token. ', error);
  }
};

// Listener for incoming messages
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      resolve(payload);
    });
  });

export { auth, firestore, messaging };
