// Register Page
document.querySelector("form").addEventListener("submit", registerUser);

const url = "http://energywise.ddns.net:3000"; //this could change


async function registerUser(e) {
    e.preventDefault();

    // Get form data
    const formData = {
        firstName: e.target.elements[0].value,
        username: e.target.elements[1].value,
        email: e.target.elements[2].value,
        password: e.target.elements[3].value,
        repeatPassword: e.target.elements[4].value,
        postcode: e.target.elements[5].value,
        householdSize: e.target.elements[6].value,
    };

    // Validate password match
    if (formData.password !== formData.repeatPassword) {
        alert("Passwords do not match.");
        return;
    }

    // API request options
    const options = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    };

    try {
        const response = await fetch(`${url}/users/register`, options);
        const data = await response.json();

        if (response.ok) {
            alert("Registration successful! Redirecting to login...");
            window.location.assign("login.html");
        } else {
            alert(data.error || "Registration failed. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Please check your connection and try again.");
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the helper paragraph that will trigger the modal
var helper = document.getElementById("helper");

// Get the <span> element that will close the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the helper paragraph, open the modal
helper.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}