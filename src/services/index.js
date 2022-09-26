// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAamqKqsOx8qEXaMLETBZozgqJn0pcI27w",
  authDomain: "ecommerce-proyecto-39aa9.firebaseapp.com",
  projectId: "ecommerce-proyecto-39aa9",
  storageBucket: "ecommerce-proyecto-39aa9.appspot.com",
  messagingSenderId: "660785391646",
  appId: "1:660785391646:web:d400c8aeecb4eedf0f660f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;