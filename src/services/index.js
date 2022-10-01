import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAamqKqsOx8qEXaMLETBZozgqJn0pcI27w",
  authDomain: "ecommerce-proyecto-39aa9.firebaseapp.com",
  projectId: "ecommerce-proyecto-39aa9",
  storageBucket: "ecommerce-proyecto-39aa9.appspot.com",
  messagingSenderId: "660785391646",
  appId: "1:660785391646:web:d400c8aeecb4eedf0f660f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;