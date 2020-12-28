import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCJOyzfE46rG_SUOlr-k62BSP4JUdq_4Tw",
  authDomain: "lightbydan-1569325510991.firebaseapp.com",
  projectId: "lightbydan-1569325510991",
  storageBucket: "lightbydan-1569325510991.appspot.com",
  messagingSenderId: "891128779497",
  appId: "1:891128779497:web:89af3a87ce7ab899e55678",
  measurementId: "G-V5ZFGBLTW5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
