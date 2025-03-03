// Register Page
document.querySelector("form").addEventListener("submit", registerUser);

const url = "http://energywise.ddns.net"; //this could change

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
        region: e.target.elements[7].value
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