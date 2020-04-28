import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyDAQp9IvlX6QHooKHEKGNvbkQ5g72PMeRc",
  authDomain: "cp476-sniffbook.firebaseapp.com",
  databaseURL: "https://cp476-sniffbook.firebaseio.com",
  projectId: "cp476-sniffbook",
  storageBucket: "cp476-sniffbook.appspot.com",
  messagingSenderId: "261424504001",
  appId: "1:261424504001:web:fae6c26da6cf7e379a0840",
  measurementId: "G-ZZRYYBRGD3"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig).database()

export const db = firebase.app().database()
export const storage = firebase.storage()