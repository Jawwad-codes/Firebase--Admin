  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyD5w_PTxGI3FeLlU426eTBmlCGesYfp5oc",
    authDomain: "noon-app-ecb10.firebaseapp.com",
    projectId: "noon-app-ecb10",
    storageBucket: "noon-app-ecb10.appspot.com",
    messagingSenderId: "472373674179",
    appId: "1:472373674179:web:8a146045a9fa32906b6276",
    measurementId: "G-4XC9DEPKNW"
  };
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);