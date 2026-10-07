// ===== Helpalot Academy - Shared Firebase Config =====
const firebaseConfig = {
  apiKey: "AIzaSyDoaJ4fOXZHWqKYlTo9nCf-Dy6IEwCvXKg",
  authDomain: "ndyo-intrenship.firebaseapp.com",
  projectId: "ndyo-intrenship",
  storageBucket: "ndyo-intrenship.firebasestorage.app",
  messagingSenderId: "1053500008575",
  appId: "1:1053500008575:web:4c599d68a06eaf09c7374a",
  measurementId: "G-RTJV152SKG"
};
if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
const auth = firebase.auth();
const db   = firebase.firestore();

// Admin credentials: admin@helpalot.help / admin123
const ADMIN_EMAILS = ["admin@helpalot.help"];
function isAdmin(email){ return ADMIN_EMAILS.map(e=>e.toLowerCase()).includes((email||'').toLowerCase()); }
