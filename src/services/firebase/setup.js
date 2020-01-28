import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
//import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
//import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   
import * as firebaseui  from 'firebaseui';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const uiConfig = {
    signInSuccessUrl:'/',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
       // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
       // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        //firebase.auth.GithubAuthProvider.PROVIDER_ID,
        //firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
};

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const db = firebase.firestore();



export const startUi = (elementId) => {
    const ui = new firebaseui.auth.AuthUI(auth);
    ui.start(elementId, uiConfig);
};
