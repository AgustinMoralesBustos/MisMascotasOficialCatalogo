import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDep5ve1e-xZ8Emdi75V_dCE3r-CjgqNNs",
  authDomain: "mismascotasoficial-b6eec.firebaseapp.com",
  projectId: "mismascotasoficial-b6eec",
  storageBucket: "mismascotasoficial-b6eec.appspot.com",
  messagingSenderId: "580322422585",
  appId: "1:580322422585:web:c90706c1c560c2cccc42e8",
  measurementId: "G-MKGBZD7FSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
