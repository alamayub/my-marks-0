import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
  apiKey: "AIzaSyArAaX6gU72l9126iVqHU64rFKK9nRWZyI",
  authDomain: "mymarks0.firebaseapp.com",
  databaseURL: "https://mymarks0.firebaseio.com",
  projectId: "mymarks0",
  storageBucket: "mymarks0.appspot.com",
  messagingSenderId: "744249949362",
  appId: "1:744249949362:web:f5cd5a20dfbcc0064e1dab",
  measurementId: "G-1V4V8Q3PEY"
};
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { fb, db }
