import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlKFLOjhZMR-0YevVUX-Ewh8Za9lEHqcE",
  authDomain: "thrift-d12f6.firebaseapp.com",
  projectId: "thrift-d12f6",
  storageBucket: "thrift-d12f6.firebasestorage.app",
  messagingSenderId: "453381930198",
  appId: "1:453381930198:web:ed25c8ddcb94df51ca5d77",
  measurementId: "G-V5DLD5N1BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const submit = document.getElementById('submit');

submit.addEventListener("click", function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('passwrd').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Creating Account...");
      window.location.href = "index1.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
