import {signOut,onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./firebaseConfiq.js";
const signout = document.getElementById("sign-out");
onAuthStateChanged(auth,(user)=>{
    if (user) {
        const uid = user.uid;
        console.log(uid);
      } else {
        window.location = "login.html";
      }
})
signout.addEventListener("click",()=>{
signOut(auth).then(() => {
  window.location="login.html";
}).catch((error) => {
  console.log(error)
});
});