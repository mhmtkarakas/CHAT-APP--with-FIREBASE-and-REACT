// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU2i1K7WbdUzj-vlgVdFvw35J1QJ87Kg4",
  authDomain: "chatrooms-47fa2.firebaseapp.com",
  projectId: "chatrooms-47fa2",
  storageBucket: "chatrooms-47fa2.appspot.com",
  messagingSenderId: "77088120662",
  appId: "1:77088120662:web:d5a81cd102bd3ca91b80f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)