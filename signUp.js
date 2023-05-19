const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const eyeicon = document.getElementById("eyeicon");
const eyeicon2 = document.getElementById("eyeicon2");

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "img/eye.png";
  } else {
    password.type = "password";
    eyeicon.src = "img/eye-slash.png";
  }
};

eyeicon2.onclick = function () {
  if (password2.type == "password") {
    password2.type = "text";
    eyeicon2.src = "img/eye.png";
  } else {
    password2.type = "password";
    eyeicon2.src = "img/eye-slash.png";
  }
};
const username = document.getElementById("username");
  const form = document.querySelector("form");
  const form2 = document.querySelector("#form2");
  const errorMessage = document.getElementById("errorMessage");
  const errorMessage2 = document.getElementById("errorMessage2");
  
  let name = null;

  
  form.addEventListener("submit", (e) => {
      const errors = [];
      const errors2 = [];
  
      if(username.value.trim() === ""){
          errors.push("Username required")
      }
  
      if(password.value.length <= 6){
          errors.push("Password must be at least 6 charaters")
      }
  
      if(password.value.length >= 10){
          errors.push("Password must be less than 10 charaters")
      }
      if(password.value !== password2.value){
        errors2.push("Password doesn't match")
      }
      if(errors.length > 0){
          e.preventDefault();
          errorMessage.toggleAttribute('hidden');
          errorMessage.innerHTML = errors.join(', ');
     }
      if(errors2.length > 0){
          e.preventDefault();
          errorMessage2.toggleAttribute('hidden');
          errorMessage2.innerHTML = errors2.join(', ');
          errorMessage2.classList.add("mb-6");
          errorMessage2.classList.add("-mt-8");
     }
  });


  var loader = document.getElementById("loader");

  window.addEventListener("load", function() {
    loader.style.display = "none";
  });




  