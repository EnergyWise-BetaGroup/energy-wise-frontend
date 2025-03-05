// Login Page
document.getElementById("login-form").addEventListener("submit", login)

<<<<<<< HEAD
const url = "http://energywise.ddns.net" //THIS COULD CHANGE
=======
const url = "http://energywise.ddns.net:3000" //THIS COULD CHANGE
>>>>>>> ef08c56be2479ba81c8db7a05252681c44707fdf

async function login(e) {
    e.preventDefault();

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: e.target.elements[0].value,
            password: e.target.elements[1].value
        })
    };
    const response = await fetch(`${url}/users/login`, options);
    const data = await response.json();

    if (response.ok) {
        localStorage.setItem("token", data.token);
        window.location.assign("stats.html");
    } else {
        alert(data.error);
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> ef08c56be2479ba81c8db7a05252681c44707fdf
