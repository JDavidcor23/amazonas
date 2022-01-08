import {GoogleAuthProvider} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5D696hUIrPfJeD_PVFikYfQL5xtJaJCc",
  authDomain: "as-72de6.firebaseapp.com",
  projectId: "as-72de6",
  storageBucket: "as-72de6.appspot.com",
  messagingSenderId: "914116001770",
  appId: "1:914116001770:web:03711a19ea4594d508bc93"
};

const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider()
export  {
    app,
    google
}