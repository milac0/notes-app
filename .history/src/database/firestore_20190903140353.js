import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: "notes-app-597c2.firebaseapp.com",
    databaseURL: "https://notes-app-597c2.firebaseio.com",
    projectId: "notes-app-597c2",
    storageBucket: "",
    messagingSenderId: "200665555561",
    appId: "1:200665555561:web:b9634afcbd8bacc8"
  };

firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth()
const db = firebase.firestore()

export default db