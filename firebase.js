// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOTEV7qolxO9DPGowxiQDXWRVm2Tha7uk",
    authDomain: "twitter-clone-ec5c1.firebaseapp.com",
    projectId: "twitter-clone-ec5c1",
    storageBucket: "twitter-clone-ec5c1.appspot.com",
    messagingSenderId: "16185033427",
    appId: "1:16185033427:web:11888adc8525ca04cb4a26"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };