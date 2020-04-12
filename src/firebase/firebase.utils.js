import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDHXjGKxOAU1Xu4u57CMXLMn2Xaj2UuC48",
    authDomain: "crwn-db-ea285.firebaseapp.com",
    databaseURL: "https://crwn-db-ea285.firebaseio.com",
    projectId: "crwn-db-ea285",
    storageBucket: "crwn-db-ea285.appspot.com",
    messagingSenderId: "351263746107",
    appId: "1:351263746107:web:d2476de8b79b775501d41e",
    measurementId: "G-HTF141R0X4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


