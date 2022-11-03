import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAnkxtg59lNU6PSYjEmKYvJLS6vKOvHlxc",
    authDomain: "lubricentro-stocco.firebaseapp.com",
    projectId: "lubricentro-stocco",
    storageBucket: "lubricentro-stocco.appspot.com",
    messagingSenderId: "585751419365",
    appId: "1:585751419365:web:deeed9129ca5149fb8370c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)