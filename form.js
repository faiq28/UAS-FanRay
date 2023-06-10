const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");
  
let name = null;

  function fromm(){
    form.addEventListener("submit", (e) => {
        const errors = [];
  
        if(username.value.trim() === ""){
            errors.push("Username required")
        }
  
        if(password.value.length <= 6){
            errors.push("Password must be at least 6 charaters")
        }
  
        if(password.value.length >= 10){
            errors.push("Password must be less than 10 charaters")
        }
        if(errors.length > 0){
            e.preventDefault();
            errorMessage.toggleAttribute('hidden');
            errorMessage.innerHTML = errors.join(', ');
       }
       payment()
    });
  }
  
