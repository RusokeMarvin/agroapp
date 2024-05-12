// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuVH7o70vegxD3ZMcEzkQkwA4RC3y5VSw",
  authDomain: "agroapp-fe488.firebaseapp.com",
  projectId: "agroapp-fe488",
  storageBucket: "agroapp-fe488.appspot.com",
  messagingSenderId: "1011895381685",
  appId: "1:1011895381685:web:c0ff0413579268019a58fc",
  measurementId: "G-811R3H5L2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


export { firestore, storage };
