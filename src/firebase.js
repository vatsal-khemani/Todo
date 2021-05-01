// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyALRbujMvI7djSevOvyboEm8ROVBo716H8",
    authDomain: "todo-app-react-49f47.firebaseapp.com",
    projectId: "todo-app-react-49f47",
    storageBucket: "todo-app-react-49f47.appspot.com",
    messagingSenderId: "232433752052",
    appId: "1:232433752052:web:7c148f1a60d4e883fe8ba1",
    measurementId: "G-K16X6V28CD"
});

const db=firebaseApp.firestore();
export default db;