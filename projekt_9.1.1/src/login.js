const API_PATH = "http://localhost:3000";


//const password = document.querySelector("#password")
const form = document.querySelector("form")

function login() {
    form.addEventListener("submit", (event) => {
    const password = form.password.value;
    const email = form.email.value;
    event.preventDefault();

    fetch(`${API_PATH}/auth/cookie/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password
     }),
  });
  });

// window.location.reload()
}


document.addEventListener("DOMContentLoaded", () => {

})