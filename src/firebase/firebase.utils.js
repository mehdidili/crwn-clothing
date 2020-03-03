import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCiYjjQb9L_kx_m3UAiF0mC6gbnLEBQGX8",
    authDomain: "crown-db-2d88a.firebaseapp.com",
    databaseURL: "https://crown-db-2d88a.firebaseio.com",
    projectId: "crown-db-2d88a",
    storageBucket: "crown-db-2d88a.appspot.com",
    messagingSenderId: "681808947014",
    appId: "1:681808947014:web:8ba96cad032086c3a06747"
  };
 

  export const createUserProfileDocument = (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef =firestore.doc(`users/${userAuth.uid}`);
    const userSnap = userRef.get( );

    

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;