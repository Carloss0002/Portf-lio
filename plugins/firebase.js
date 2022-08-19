import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDm9VSoR1tZP4FvTv5I6ElXWx9cSCHwP90",
    authDomain: "portfolio-8ef3b.firebaseapp.com",
    projectId: "portfolio-8ef3b",
    storageBucket: "portfolio-8ef3b.appspot.com",
    messagingSenderId: "496003275312",
    appId: "1:496003275312:web:58b7959e9b7fdfd1652bf5",
    measurementId: "G-SL8C9RHM9P"
  };
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
} 

export const fireDb = firebase.firestore()





