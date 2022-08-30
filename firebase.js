// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZ3TbnTpBdb76SMR1FYS-mmiaJQOm9oR0",
    authDomain: "bird-app-8603b.firebaseapp.com",
    projectId: "bird-app-8603b",
    storageBucket: "bird-app-8603b.appspot.com",
    messagingSenderId: "840423479197",
    appId: "1:840423479197:web:5e316f7c2267ede5d2c174",
    measurementId: "G-61EZKFVSLR"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };