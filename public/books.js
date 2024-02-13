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
            console.log('showBooks called');
            console.log('Token before fetch:', token);
            console.log('Stored Token:', localStorage.getItem('token'));
            enableInput(false);

            const response = await fetch("/books", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            });

            const data = await response.json();
            console.log('Response Status:', response.status);
            console.log('Response Data:', data);
            if (response.status === 200) {
                console.log(token)
                console.log('successfully trying to show books')
                window.location.href = '/books'
            }

        } catch (err) {
            console.log(err);
            message.textContent = "A communication error occurred.";
        }
};