document.addEventListener("DOMContentLoaded", () => {
    const url = "http://energywise.ddns.net:3000";
    
    // Function to load user profile data
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
    
    // Function to update the UI with user data
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

    // Load profile data when the page loads
    loadProfile();
    
    // Select elements for edit profile toggle
    const editProfileButton = document.querySelector("#edit-information .lg-button");
    const cancelEditButton = document.querySelector("#cancel-edit");
    const editProfileForm = document.querySelector("#edit-profile-form");
    const userInfoSection = document.querySelector("#edit-information");
    const infoBox = document.querySelector(".white-box-1");
    const tariffBox = document.querySelector(".white-box-2");
    const headings = document.querySelectorAll("h3");

    // Show edit form and hide profile information, including the edit button itself
    editProfileButton.addEventListener("click", () => {
        editProfileForm.classList.remove("hidden");
        userInfoSection.classList.add("hidden");
        infoBox.classList.add("hidden");
        tariffBox.classList.add("hidden");
        headings.forEach(h3 => h3.classList.add("hidden"));
        editProfileButton.classList.add("hidden"); // Hide the edit profile button
    });

    // Cancel edit and restore profile view, including the edit button
    cancelEditButton.addEventListener("click", () => {
        editProfileForm.classList.add("hidden");
        userInfoSection.classList.remove("hidden");
        infoBox.classList.remove("hidden");
        tariffBox.classList.remove("hidden");
        headings.forEach(h3 => h3.classList.remove("hidden"));
        editProfileButton.classList.remove("hidden"); // Show the edit profile button again
    });
});
