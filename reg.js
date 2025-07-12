// reg.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlKFLOjhZMR-0YevVUX-Ewh8Za9lEHqcE",
  authDomain: "thrift-d12f6.firebaseapp.com",
  projectId: "thrift-d12f6",
  storageBucket: "thrift-d12f6.appspot.com",
  messagingSenderId: "453381930198",
  appId: "1:453381930198:web:ed25c8ddcb94df51ca5d77",
  measurementId: "G-V5DLD5N1BR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById('submit').addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('passwrd').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("✅ Account created!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("❌ Registration failed: " + error.message);
    });
});

document.getElementById('googleBtn').addEventListener("click", (event) => {
  event.preventDefault();
  signInWithPopup(auth, provider)
    .then(() => {
      alert("✅ Signed up with Google!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("❌ Google signup failed: " + error.message);
    });
});
