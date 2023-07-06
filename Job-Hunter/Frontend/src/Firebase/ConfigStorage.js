// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRjuEnAc9Zk1dZ9Wj3K1Tz0-jrPjWbpJo",
    authDomain: "soland-9a89e.firebaseapp.com",
    databaseURL: "https://soland-9a89e-default-rtdb.firebaseio.com",
    projectId: "soland-9a89e",
    storageBucket: "soland-9a89e.appspot.com",
    messagingSenderId: "329491690977",
    appId: "1:329491690977:web:5dce2c78a39f5dcffecea0",
    measurementId: "G-RH7TENLK3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage, app, firebaseConfig };