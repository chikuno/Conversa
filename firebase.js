import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCSv5LPnvcCGlMPvf81BibOkCHoQJkN-DA",
    authDomain: "watsclone-7f660.firebaseapp.com",
    projectId: "watsclone-7f660",
    storageBucket: "watsclone-7f660.appspot.com",
    messagingSenderId: "1098772612589",
    appId: "1:1098772612589:web:6b261d163722d68e5c13e4"
  };

//   if firebase instance if already initialized then use the existing instance else reinitialize it
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };