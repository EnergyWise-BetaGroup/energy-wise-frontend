document.addEventListener("DOMContentLoaded", loadProfile);

<<<<<<< HEAD
const url = "http://energywise.ddns.net";
=======
const url = "http://energywise.ddns.net:3000";
>>>>>>> ef08c56be2479ba81c8db7a05252681c44707fdf

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



// Update profile (needs to be tested)
document.addEventListener("DOMContentLoaded", () => {
    loadProfile();
    document.getElementById("edit-profile-btn").addEventListener("click", showEditForm);
    document.getElementById("cancel-edit").addEventListener("click", hideEditForm);
    document.getElementById("profile-form").addEventListener("submit", saveProfileChanges);
});

async function loadProfile() {
    const token = localStorage.getItem("token");
    if (!token) {
        alert("You need to log in first.");
        window.location.assign("login.html");
        return;
    }

    try {
        const response = await fetch(`${url}/users/profile`, {
            method: "GET",
            headers: {
                "Authorization": `${token}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error("Failed to load profile data.");

        const userData = await response.json();
        updateProfileUI(userData);
        populateEditForm(userData);
    } catch (error) {
        console.error("Error fetching profile data:", error);
        alert("Could not load profile. Please try again.");
    }
}

function updateProfileUI(user) {
    document.querySelector(".white-name-div h2").textContent = user.name || "[NAME]";
    document.querySelector(".round-image").src = user.profileImage || "./assets/quokka.jpg";

    document.querySelector(".white-box-1").innerHTML = `
        <p><strong>Username:</strong> ${user.username || "Missing username"}</p>
        <p><strong>Email:</strong> ${user.email || "Missing email"}</p>
        <p><strong>Address:</strong> ${user.address || "Missing address"}</p>
        <p><strong>Year of Birth:</strong> ${user.yearOfBirth || "Missing Year of Birth"}</p>
        <p><strong>Postcode:</strong> ${user.postcode || "Missing Postcode"}</p>
        <p><strong>Household Size:</strong> ${user.householdSize || "Missing household size"}</p>
    `;
}

// Prefill the edit form with user data
function populateEditForm(user) {
    document.getElementById("username").value = user.username || "";
    document.getElementById("email").value = user.email || "";
    document.getElementById("address").value = user.address || "";
    document.getElementById("yearOfBirth").value = user.yearOfBirth || "";
    document.getElementById("postcode").value = user.postcode || "";
    document.getElementById("householdSize").value = user.householdSize || "";
}

// Show & hide form
function showEditForm() {
    document.getElementById("edit-profile-form").classList.remove("hidden");
}
function hideEditForm() {
    document.getElementById("edit-profile-form").classList.add("hidden");
}

// Save changes to the backend
async function saveProfileChanges(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return alert("You must be logged in.");

    const updatedData = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        yearOfBirth: document.getElementById("yearOfBirth").value,
        postcode: document.getElementById("postcode").value,
        householdSize: document.getElementById("householdSize").value
    };

    try {
        const response = await fetch(`${url}/users/profile`, {
            method: "PUT",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
        });

        if (!response.ok) throw new Error("Failed to save profile changes.");

        alert("Profile updated successfully!");
        hideEditForm();
        loadProfile();
    } catch (error) {
        console.error("Error saving profile:", error);
        alert("Could not update profile. Please try again.");
    }
}
