import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTWrJRc4V1qUtrkdi0q06-JS-qmqw62Ow",
    authDomain: "pokedex-m.firebaseapp.com",
    projectId: "pokedex-m",
    storageBucket: "pokedex-m.appspot.com",
    messagingSenderId: "466614743606",
    appId: "1:466614743606:web:53118911b714e8d6031e97"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);