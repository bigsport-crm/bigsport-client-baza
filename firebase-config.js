// Firebase Configuration
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
const firebaseConfig = {
    apiKey: "AIzaSyDPIrieoenqtwzD2A-QzxHknztZKtOaf18",
    authDomain: "bigsport-crm.firebaseapp.com",
    projectId: "bigsport-crm",
    storageBucket: "bigsport-crm.firebasestorage.app",
    messagingSenderId: "645659654481",
    appId: "1:645696694481:web:e65a139cb67e68b8787df0",
    measurementId: "G-RKSKY82609"
};
// Initialize Firebase
let app;
let auth;
let db;
try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    console.log('✅ Firebase муваффақиятли уланди');
} catch (error) {
    console.error('❌ Firebase хатоси:', error);
}
export { app, auth, db };


