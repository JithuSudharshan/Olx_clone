import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCBE9HZKv8S-MxQpvzaE6cxWBX7rv1Scs",
  authDomain: "olx-clone-9c906.firebaseapp.com",
  projectId: "olx-clone-9c906",
  storageBucket: "olx-clone-9c906.firebasestorage.app",
  messagingSenderId: "615944870412",
  appId: "1:615944870412:web:d327f6af8443623eec2c29",
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



