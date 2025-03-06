// Login Page
document.querySelector("form").addEventListener("submit", login);

const url = "http://localhost:3000" //THIS COULD CHANGE

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
}
