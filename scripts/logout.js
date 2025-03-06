function logout() {
    console.log("Logging out...");
    localStorage.removeItem("token"); // Clear authentication token
    window.location.href = "index.html"; // Redirect to login page
  }

logout()
