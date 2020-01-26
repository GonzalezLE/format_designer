import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
//import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
//import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   
import * as firebaseui  from 'firebaseui';

const firebaseConfig = {
    apiKey: "AIzaSyC6znd8LOLGPvzifTO_z4nBDicDsQR3DCI",
    authDomain: "document-ad406.firebaseapp.com",
    databaseURL: "https://document-ad406.firebaseio.com",
    projectId: "document-ad406",
    storageBucket: "document-ad406.appspot.com",
    messagingSenderId: "702412303800",
    appId: "1:702412303800:web:a8a12251ff725c548e334d",
    measurementId: "G-XT4VKYJBEL"
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
