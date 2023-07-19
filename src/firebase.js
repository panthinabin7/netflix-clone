import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNSMEdx5ppFeqUIQjYjQw9M7e9Tl7sBuc",
  authDomain: "netflix-clone-66d1a.firebaseapp.com",
  projectId: "netflix-clone-66d1a",
  storageBucket: "netflix-clone-66d1a.appspot.com",
  messagingSenderId: "1037701018814",
  appId: "1:1037701018814:web:1c205e52d6b7fd2db11aef",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
