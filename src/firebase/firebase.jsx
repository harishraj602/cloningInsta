// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey:"AIzaSyCzXGhO2zEAIlBBH40E-D_dP6x1IWbm2ks",
  authDomain:"insta-clone-6976e.firebaseapp.com" ,
  projectId:"insta-clone-6976e",
  storageBucket:"insta-clone-6976e.appspot.com",
  messagingSenderId:"201318624165",
  appId:"1:201318624165:web:9e5f8c3ac31ef92cd5564c",
  measurementId:"G-ZV4TB73F46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
const firestore=getFirestore(app)
const storage=getStorage(app)

export {app,auth,firestore,storage}
