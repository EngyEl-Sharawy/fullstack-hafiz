// Login & Register pages--part
const form = document.getElementById("form");
const name_Input = document.getElementById("name-input");
const email_Input = document.getElementById("email-input");
const password_Input = document.getElementById("password-input");
const repeat_password_Input = document.getElementById("repeat-password-input");
const error_message = document.getElementById("error-message");

form.addEventListener('submit', (e) => {
  let errors = [];

  if (name_Input) {
    errors = getSignupFormErrors(name_Input.value, email_Input.value, password_Input.value, repeat_password_Input.value);
  } else {
    errors = getLoginFormErrors(email_Input.value, password_Input.value);
  }

  if (errors.length > 0) {
    e.preventDefault();
    error_message.innerText = errors.join(". ");
  }
});

function getSignupFormErrors(name, email, password, repeatPassword) {
  let errors = [];

  if (!name) {
    // Name is required
    errors.push("Name is required");
    name_Input.closest(".inputBox").classList.add("incorrect");
  }
  if (!email) {
    // Email is required
    errors.push("Email is required");
    email_Input.closest(".inputBox").classList.add("incorrect");
  }
  if (!password) {
    // Password is required
    errors.push("Password is required");
    password_Input.closest(".inputBox").classList.add("incorrect");
  }
  if (password.length < 8) {
    // Password must have at least 8 characters
    errors.push("Password must have at least 8 characters");
    password_Input.closest(".inputBox").classList.add("incorrect");
  }
  if (password !== repeatPassword) {
    // Password does not match repeated password
    errors.push("Password does not match repeated password")
    password_Input.closest(".inputBox").classList.add("incorrect");
    repeat_password_Input.closest(".inputBox").classList.add("incorrect")
  }

  return errors;
}

function getLoginFormErrors(email, password) {
  let errors =[];

  if (!email) {
    // Email is required
    errors.push("Email is required");
    email_Input.closest(".inputBox").classList.add("incorrect");
  }
  if (!password) {
    // Password is required
    errors.push("Password is required");
    password_Input.closest(".inputBox").classList.add("incorrect");
  }

  return errors;
}

const allInput = [name_Input, email_Input, password_Input, repeat_password_Input].filter(input => input != null);

allInput.forEach(input => {
  input.addEventListener('input', () => {
    if (input.closest(".inputBox").classList.contains("incorrect")) {
      input.closest(".inputBox").classList.remove("incorrect")
      error_message.innerText = '';
    }
  });
});