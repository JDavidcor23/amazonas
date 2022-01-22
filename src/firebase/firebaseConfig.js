import {GoogleAuthProvider} from 'firebase/auth'
import { FacebookAuthProvider } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
 
const firebaseConfig = {
  apiKey: "AIzaSyDoxS1CxFkFlQwp-FvRP2GdMo3Sw_wWp_k",
  authDomain: "as-74bd2.firebaseapp.com",
  projectId: "as-74bd2",
  storageBucket: "as-74bd2.appspot.com",
  messagingSenderId: "314356122830",
  appId: "1:314356122830:web:bf5fe66ad8b734ef597c9f"
};

const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();
const facebook = new FacebookAuthProvider()
const db = getFirestore();
export  {
    app,
    google,
    facebook,
    db
}