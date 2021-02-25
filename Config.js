import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCSfPbdymrB_Fb7TuRA4mGOnRU3LDGsmYs",
    authDomain: "barter-system-app-e32d5.firebaseapp.com",
    projectId: "barter-system-app-e32d5",
    storageBucket: "barter-system-app-e32d5.appspot.com",
    messagingSenderId: "634242217162",
    appId: "1:634242217162:web:dcb2d79784034b7d48b033"
  };
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  
export default firebase.firestore()