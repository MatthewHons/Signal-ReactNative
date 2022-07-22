import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB1MFsCyL90xRBbJNzhr9kSuBTNK4Xd_4",
  authDomain: "signal-42c67.firebaseapp.com",
  projectId: "signal-42c67",
  storageBucket: "signal-42c67.appspot.com",
  messagingSenderId: "682780245650",
  appId: "1:682780245650:web:a1312f56030076dd85b04b",
};
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
