// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = { 
    apiKey : "AIzaSyA4uLUYV21xLwChb5y2nC-6uAa3wMlQmWg" , 
    authDomain : "lead--site.firebaseapp.com" , 
    projectId : "lead--site" , 
    storageBucket : "lead--site.appspot.com" , 
    messagingSenderId : "763870751506" , 
    appId : "1:763870751506:web:78ce6b3eb38fcec25021cb" , 
    measurementId : "G-XSCDZKZN34" 
};

// Initialize Firebase
initializeApp(firebaseConfig);
