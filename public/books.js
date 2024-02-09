import {
    inputEnabled,
    setDiv,
    message,
    setToken,
    token,
    enableInput,
  } from "./index.js";

  import { showLoginRegister } from "./loginRegister.js";
//  import { showAddEdit } from "./addEdit.js";
//  import { deleteEntry} from "./addEdit.js"

export const showBooks = async () => {
    try {
        enableInput(false);
        const response = await fetch("/books", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        });
        console.log('Token before fetch:', token);

        const data = await response.json();
        console.log('Response Status:', response.status);
        console.log('Response Data:', data);
        if (response.status === 200) {
            window.location.href = '/books';
            console.log('here are the books', data)
        }

    } catch (err) {
        console.log(err);
        message.textContent = "A communication error occurred.";
    }
    };