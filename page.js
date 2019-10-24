const modal = document.getElementById("modal");
const btnModal = document.getElementById("btn--sign");
const btnClose = document.getElementById("btn--close");
const userPassword = document.getElementById("password");
const errorPassword = document.getElementById("error-password");
const userEmail = document.getElementById("email");
const errorEmail = document.getElementById("error-email");
const signin = document.getElementById("btn--sign-in");
let inputs = document.querySelectorAll("input");

btnModal.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);

function openModal() {
  userEmail.value = "";
  userPassword.value = "";
  errorPassword.textContent = "";
  errorEmail.textContent = "";
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

for (let input of inputs) {
  input.addEventListener("blur", function() {
    errorPassword.textContent = "";
    errorEmail.textContent = "";
    if (!userEmail.value) {
      errorEmail.textContent = "Field should not be empty";
      return false;
    }
    let check = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      userEmail.value
    );
    if (check === false) {
      errorEmail.textContent = "Enter a valid email.";
      return false;
    }
    if (!userPassword.value) {
      errorPassword.textContent = "Field should not be empty";
      return false;
    }
    if (userPassword.value.length < 8) {
      errorPassword.textContent =
        "Password must be at least 8 characters long.";
      return false;
    }
  });
}

signin.addEventListener("click", function(e) {
  errorPassword.textContent = "";
  errorEmail.textContent = "";
  if (!userEmail.value) {
    errorEmail.textContent = "Field should not be empty";
    e.preventDefault();
    return false;
  }
  let check = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
    userEmail.value
  );
  if (check === false) {
    errorEmail.textContent = "Enter a valid email.";
    e.preventDefault();
    return false;
  }
  if (!userPassword.value) {
    errorPassword.textContent = "Field should not be empty";
    e.preventDefault();
    return false;
  }
  if (userPassword.value.length < 8) {
    errorPassword.textContent = "Password must be at least 8 characters long.";
    e.preventDefault();
    return false;
  }
});
