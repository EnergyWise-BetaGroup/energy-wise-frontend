// Login Page
document.getElementById("login-form").addEventListener("submit", login)

const url = "https://learnifybackend-wvnw.onrender.com"

async function login(e) {
    e.preventDefault();

    console.log(e.target);

    // const options = {
    //     method: "POST",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         username: form.get("username"),
    //         password: form.get("password")
    //     })
    // };
    //console.log(options);
    //const response = await fetch(`${url}/users/login`, options);
    //const data = await response.json();

    // if (response.ok) {
    //     localStorage.setItem("token", data.token);
    //     window.location.assign("stats.html");
    // } else {
    //     alert(data.error);
    // }
}