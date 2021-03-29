import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyA92qZwFM_fS4LQ7Q1YNC7Gcni5wxlUko4",
  authDomain: "login-9ac5f.firebaseapp.com",
  projectId: "login-9ac5f",
  storageBucket: "login-9ac5f.appspot.com",
  messagingSenderId: "536911529404",
  appId: "1:536911529404:web:d30d1c8cd5b9e55b8ed7b9",
  measurementId: "G-256KB8VTTQ"
};
// Initialize Firebase
const fire  = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp,fire,firebase };

