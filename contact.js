let form=document.getElementById("form");
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let error3=document.getElementById("error3");
let name1=document.getElementById("name");
let pass=document.getElementById("pass");
let email=document.getElementById("email");


form.addEventListener("submit", function (e) {

    if (name1.value.length == 0) {
      error1.style.display = "block";
      e.preventDefault();
    } else {
      error1.style.display = "none";
    }
    
  
  if (pass.value.length <= 8) {
      error3.style.display = "block";
      e.preventDefault();
    } else {
      error3.style.display = "none";
    }
    if (email.value == 0 || email.value.includes("@") == false) {
      error2.style.display = "block";
      e.preventDefault();
    } else {
      error2.style.display = "none";
    }
});