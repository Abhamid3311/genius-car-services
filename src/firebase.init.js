// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBry0guM-pwCYI9e1-3TTchAaJlzDGjWzU",
    authDomain: "genius-car-services-53233.firebaseapp.com",
    projectId: "genius-car-services-53233",
    storageBucket: "genius-car-services-53233.appspot.com",
    messagingSenderId: "971590825092",
    appId: "1:971590825092:web:67bb5c3eca834215e2bed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;