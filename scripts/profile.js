document.addEventListener("DOMContentLoaded", loadProfile);

const url = "http://localhost:3000";


async function loadProfile() {
    // Get stored token from localStorage
    const token = localStorage.getItem("token");
    if (!token) {
        alert("You need to log in first.");
        window.location.assign("login.html");
        return;
    }

    // Fetch user profile data
    try {
        const response = await fetch(`${url}/users/profile`, {
            method: "GET",
            headers: {
                "Authorization": `${token}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Failed to load profile data.");
        }

        const userData = await response.json();
        updateProfileUI(userData);

    } catch (error) {
        console.error("Error fetching profile data:", error);
        alert("Could not load profile. Please try again.");
    }
}


// This is to display the correct user fields
function updateProfileUI(user) {
    document.querySelector(".white-name-div h2").textContent = user.name || "[NAME]";
    document.querySelector(".round-image").src = user.profileImage || "./assets/quokka.jpg";

    const infoBox = document.querySelector(".white-box-1");
    infoBox.innerHTML = `
        <p><strong>Username:</strong> ${user.username || "Missing username"}</p>
        <p><strong>Email:</strong> ${user.email || "Missing email"}</p>
        <p><strong>Account Number:</strong> ${user.accountNumber || "Missing account number"}</p>
        <p><strong>Address:</strong> ${user.address || "Missing address"}</p>
        <p><strong>Year of Birth:</strong> ${user.yearOfBirth || "Missing Year of Birth"}</p>
        <p><strong>Postcode:</strong> ${user.postcode || "Missing Postcode"}</p>
        <p><strong>Household Size:</strong> ${user.householdSize || "Missing household size"}</p>
    `;
}
