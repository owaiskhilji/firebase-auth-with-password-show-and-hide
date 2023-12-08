
 import{ initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
 import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,
  updatePassword,signInWithPopup, GoogleAuthProvider,getRedirectResult, FacebookAuthProvider  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpDr54wP2UiaPSkgfY25pt_Upv10Tt7Dk",
  authDomain: "authentication-43867.firebaseapp.com",
  projectId: "authentication-43867",
  storageBucket: "authentication-43867.appspot.com",
  messagingSenderId: "635876514754",
  appId: "1:635876514754:web:cf2dc522a7143ceb32545b",
  measurementId: "G-WX3SXTS05D",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
 const provider2 = new FacebookAuthProvider();

//SIGN UP.............................

let form = document.querySelector("#btn");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
if(form){

  form.addEventListener("click",(event)=> {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(async (res) => {
        const users = res.user;
        console.log(users.email);
        window.location = "signin.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
   );

}  

 
let gle = ()=>{
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
       
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      
      const user = result.user;
      
    }).catch((error) => {
      
      const errorCode = error.code;
      const errorMessage = error.message;
      
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  

}
window.gle = gle

// SIGN UP PASSWORD SHOW & HIDE
 const inputEl = document.getElementById("password");
const eyeBtn = document.querySelector('.eye-icon')
if(eyeBtn){

  eyeBtn.addEventListener("click", ()=>{
  if(inputEl.type == 'password'){
    inputEl.type = 'text'
    eyeBtn.src ='eye-open.png'
    console.log(inputEl.type);
  }
  else if(inputEl.type == 'text'){
    inputEl.type = 'password'
    eyeBtn.src ='eye-close-1.png'
    console.log(inputEl.type);
  }
  }
   )
}



    //SIGN IN.............

    const lform = document.querySelector("#l-btn");
    const lemail = document.querySelector("#lemail");
    const lpassword = document.querySelector("#lpassword");
    const forgetBtn = document.querySelector("#forget");
  if(lform){

    lform.addEventListener("click",(event) => {
       event.preventDefault();
       signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
         .then((userCredential) => {
           const luser = userCredential.user;
           console.log(luser);
           alert("ok");
         })
         .catch((error) => {
           const errorMessage = error.message;
           console.log(errorMessage);
           alert("incorrect");
         });
     }
     );
     
  }
    

  // SIGN in password show 
const inputE = document.querySelector("#lpassword");
const eyebtn = document.querySelector('.eyeicon')
if (eyebtn) {
  eyebtn.addEventListener('click', ()=>{
  if(inputE.type == 'password'){
    inputE.type = 'text'
    console.log(inputE.type);
      eyebtn.src ='eye-open.png'
  }
  else if(inputE.type == 'text'){
    inputE.type = 'password'
    console.log(inputE.tupe);
    eyebtn.src ='eye-close-1.png'
  }
  })
}


//forget password
forgetBtn.addEventListener("click", async() => {
  const user = auth.currentUser;
  // Swal.fire("SweetAlert2 is working!");
  // const newPassword = prompt("enter new password");
  const { value: password } = await Swal.fire({
    title: "Enter your password",
    input: "password",
    inputLabel: "Password",
    inputPlaceholder: "Enter your password",
    inputAttributes: {
      maxlength: "10",
      autocapitalize: "off",
      autocorrect: "off"
    }
  });
  if (password) {
    Swal.fire(`Entered password: ${password}`);
  }
  //zzzzzz
  updatePassword(user, password)
  .then(() => {
     
    })
    .catch((error) => {
      // An error ocurred
      // ...
    });
  });