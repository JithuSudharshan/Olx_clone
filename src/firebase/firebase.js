import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";



//firebase configurations
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

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      Uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
const logOut = () => {
  signOut(auth);
};


export { auth, db, signUp, login, logOut };
