import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyABidA5TjJCxtJnssp2jMCI8nWcIbItHtQ",
  authDomain: "for-conducting-tests.firebaseapp.com",
  databaseURL:
    "https://for-conducting-tests-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "for-conducting-tests",
  storageBucket: "for-conducting-tests.appspot.com",
  messagingSenderId: "660949411201",
  appId: "1:660949411201:web:75075541298a65c224f480",
  measurementId: "G-K1FLK7G1Q5",
};
Object.freeze(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const firestore = getFirestore(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
