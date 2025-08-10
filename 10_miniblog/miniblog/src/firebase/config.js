import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDDkHNV1__u25B7pwGtv3W9gsFC1LDW5AY",
  authDomain: "minibllog.firebaseapp.com",
  projectId: "minibllog",
  storageBucket: "minibllog.firebasestorage.app",
  messagingSenderId: "329542876161",
  appId: "1:329542876161:web:89fc929db107d45edd5400",
  measurementId: "G-MGY62ST62D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);   

export {db};