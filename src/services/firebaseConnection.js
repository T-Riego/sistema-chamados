import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB6PFqVRlL39nxPn2Fh9WSDWQOA0Q0KIWs",
  authDomain: "riegosdev-f9be7.firebaseapp.com",
  projectId: "riegosdev-f9be7",
  storageBucket: "riegosdev-f9be7.firebasestorage.app",
  messagingSenderId: "662801310490",
  appId: "1:662801310490:web:aac2196b863f71ca9ec2a3",
  measurementId: "G-2J7JNW70HV"
};

const firebaseapp = initializeApp(firebaseConfig); 

const auth = getAuth(firebaseapp);
const db = getFirestore(firebaseapp);
const storage = getStorage(firebaseapp);

export { auth, db, storage };
