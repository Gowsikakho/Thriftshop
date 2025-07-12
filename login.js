import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlKFLOjhZMR-0YevVUX-Ewh8Za9lEHqcE",
  authDomain: "thrift-d12f6.firebaseapp.com",
  projectId: "thrift-d12f6",
  storageBucket: "thrift-d12f6.appspot.com",
  messagingSenderId: "453381930198",
  appId: "1:453381930198:web:ed25c8ddcb94df51ca5d77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("⚠️ Please enter both email and password.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("✅ Login successful!");
      console.log("Logged in user:", userCredential.user);
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("Login error:", error);
      alert("❌ Login failed: " + error.message);
    });
});

// Google Sign-In
document.getElementById("googleBtn").addEventListener("click", (e) => {
  e.preventDefault();
  signInWithPopup(auth, provider)
    .then((result) => {
      alert("✅ Logged in with Google!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Google login error:", error);
      alert("❌ Google login failed: " + error.message);
    });
});
