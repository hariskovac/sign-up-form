const pwdInput = document.querySelector("#password");
const pwdConfirm = document.querySelector("#password-confirm");
const pwdError = document.querySelector("#pw-error")

pwdInput.addEventListener("input", checkPassword);
pwdConfirm.addEventListener("input", checkPassword);

function checkPassword() {
  if (pwdInput.value !== pwdConfirm.value) {
    pwdInput.style.color = "red";
    pwdConfirm.style.color = "red";
    pwdError.textContent = "Passwords do not match."
  } else {
    pwdInput.style.color = "black";
    pwdConfirm.style.color = "black";
    pwdError.textContent = "";
  }
}