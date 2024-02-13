let activeDiv = null;
export const setDiv = (newDiv) => {
  if (newDiv != activeDiv) {
    if (activeDiv) {
      activeDiv.style.display = "none";
    }
    newDiv.style.display = "block";
    activeDiv = newDiv;
  }
};

export let inputEnabled = true;
export const enableInput = (state) => {
    inputEnabled = state;
};

export let token = null;
export const setToken = (value) => {
    token = value;
    if (value) {
        localStorage.setItem("token", value);
  } else {
        localStorage.removeItem("token");
  }
  console.log("Token set:", value);

};

export let message = null;

import { showLoginRegister, handleLoginRegister } from "./loginRegister.js";
import { handleLogin } from "./login.js";
import { handleRegister } from "./register.js";
import { showBooks } from "./books.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded event fired");
    token = localStorage.getItem("token");
    message = document.getElementById("message");
    handleLoginRegister();
    handleLogin();
    handleRegister();
    showLoginRegister();
  });
