import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCUQjj52stf6Zgdzf3W33H7s7yOK7No_6A",
  authDomain: "almuasis-group.firebaseapp.com",
  databaseURL: "https://almuasis-group-default-rtdb.firebaseio.com",
  projectId: "almuasis-group",
  storageBucket: "almuasis-group.appspot.com",
  messagingSenderId: "542906096673",
  appId: "1:542906096673:web:72dfcc17d9f295256c5760",
  measurementId: "G-WVGGMNXECS"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();