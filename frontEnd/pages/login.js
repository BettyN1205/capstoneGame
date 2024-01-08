const loginBtn = document.getElementById("login_btn");
const registerBtn = document.getElementById("register_btn");
const form_box = document.getElementsByClassName("form-box")[0];
const register_box = document.getElementsByClassName("register-box")[0];
const login_box = document.getElementsByClassName("login-box")[0];
const login = document.getElementById("login");
const register = document.getElementById("register");

register.addEventListener("click", () => {
  form_box.style.transform = "translateX(80%)";
  login_box.classList.add("hidden");
  register_box.classList.remove("hidden");
});

login.addEventListener("click", () => {
  form_box.style.transform = "translateX(0%)";
  register_box.classList.add("hidden");
  login_box.classList.remove("hidden");
});

function getBody() {
  // For login
  const lUsername = document.getElementById("l-username").value;
  const lPassword = document.getElementById("l-password").value;

  // For registration
  const rUsername = document.getElementById("r-username").value;
  const rPassword = document.getElementById("r-password").value;

  return {
    login: {
      username: lUsername,
      password: lPassword,
    },
    register: {
      username: rUsername,
      password: rPassword,
    },
  };
}

function fetchData(url, body) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(body),
  });
}

loginBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const body = getBody().login;
  const response = await fetchData("http://localhost:3001/login", body);
  const data = await response.json();
  const loginUserName = document.getElementById("loginUserName");
  if (data.username !== "user name not exist") {
    loginUserName.innerText = "Login successfully";
    window.location.href = "../pages/profile/profile.html";
  } else {
    loginUserName.innerText = `${data.username}`;
  }
});

registerBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const body = getBody().register;
  const response = await fetchData("http://localhost:3001/register", body);
  const data = await response.json();
  const regMessage = document.getElementById("register_mes");

  if (data.success) {
    regMessage.innerText = "Please Login";
  } else {
    regMessage.innerText = `Failed: ${data.message}`;
  }
});
