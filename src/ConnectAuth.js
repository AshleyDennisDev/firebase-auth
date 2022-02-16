import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCkLjDp3HdJD4WvBC0GoalUSnIQJzTgq-M",
  authDomain: "fir-auth-ad.firebaseapp.com",
  projectId: "fir-auth-ad",
  storageBucket: "fir-auth-ad.appspot.com",
  messagingSenderId: "843822628460",
  appId: "1:843822628460:web:24e7ab883ac593ef9e2249"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);