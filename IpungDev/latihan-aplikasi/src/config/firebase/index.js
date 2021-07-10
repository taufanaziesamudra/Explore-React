import firebase from 'firebase/app';
// import 'firebase/auth'
// import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDcFY-93Pk2y8jKuKCHLkYmRba0Jqp5X_k",
    authDomain: "simple-notes-firebase-bbd22.firebaseapp.com",
    projectId: "simple-notes-firebase-bbd22",
    storageBucket: "simple-notes-firebase-bbd22.appspot.com",
    messagingSenderId: "420089331300",
    appId: "1:420089331300:web:4e85b50fc742b8b175e971",
    measurementId: "G-Y316QL3ZTG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;