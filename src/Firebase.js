import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBrJz-1dsItUZ1GfivZiKvji7fIw3WL8xM",
    authDomain: "todo-5d54d.firebaseapp.com",
    projectId: "todo-5d54d",
    storageBucket: "todo-5d54d.appspot.com",
    messagingSenderId: "202453773779",
    appId: "1:202453773779:web:abe4b495ea5bca611c9326"
  };

  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth();
  export const storage = getStorage();