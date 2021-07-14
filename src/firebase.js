import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDluUZHz5d-FPfD_rnrbwZcVI1KuSP7UI8",
    authDomain: "golp0-bd1e9.firebaseapp.com",
    projectId: "golp0-bd1e9",
    storageBucket: "golp0-bd1e9.appspot.com",
    messagingSenderId: "145321018911",
    appId: "1:145321018911:web:caea306548e8b27d54772a",
    measurementId: "G-5RFREK3SK4"
})
const DB = firebaseApp.firestore()
const auth = firebase.auth()

export{DB,auth}