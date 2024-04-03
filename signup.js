
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth ,GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAfTk_qBQDX0yHphouEE-lK-Bq3znEN0v8",
  authDomain: "gamerz-13a11.firebaseapp.com",
  projectId: "gamerz-13a11",
  storageBucket: "gamerz-13a11.appspot.com",
  messagingSenderId: "445595054578",
  appId: "1:445595054578:web:3b7c94355296a61b61bb6b",
  measurementId: "G-LVN4N3XEFT"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function() {
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "../logein.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });



})

