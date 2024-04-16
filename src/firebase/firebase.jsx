// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "./firebaseconfig";



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
const firestore=getFirestore(app)
const storage=getStorage(app)

export {app,auth,firestore,storage}
