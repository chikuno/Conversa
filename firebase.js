import firebase from 'firebase'

const firebaseConfig ={
  apiKey: "AIzaSyAYhmeDsEpBginu2hZApwcFdQpaR9yJJC0",
  authDomain: "zlar-7f0ed.firebaseapp.com",
  databaseURL: "https://zlar-7f0ed-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zlar-7f0ed",
  storageBucket: "zlar-7f0ed.appspot.com",
  messagingSenderId: "1008309572961",
  appId: "1:1008309572961:web:df2196a375757ddd28e120",
  measurementId: "G-ZZCZTW4ZMS"
};

//   if firebase instance if already initialized then use the existing instance else reinitialize it
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };
