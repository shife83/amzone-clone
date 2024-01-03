
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCqmw9GWrKxDbfjCnCvhcZSqgaU6yf7O8",
  authDomain: "shife-e-clone.firebaseapp.com",
  projectId: "shife-e-clone",
  storageBucket: "shife-e-clone.appspot.com",
  messagingSenderId: "982357456135",
  appId: "1:982357456135:web:9de58477371b99198f81a2",
  measurementId: "G-JKZ3YVBT9W"
};


const app = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = app.firestore()
export { auth,db };

