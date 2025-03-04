# 🌍 EnergyWise Frontend

## 📌 Overview
The **EnergyWise Frontend** is a multi-page web application built using **separate HTML, CSS, and JavaScript files** for each page. It connects to a backend hosted on a **virtual machine (VM)** and serves as the user-facing interface for interacting with the system.

The project has been thoroughly tested using **Jest**, achieving **100% test coverage** on HTML structure and core logic.

## 🚀 Features
- **Multi-Page Structure** (Separate HTML, CSS, and JavaScript files for each page)
- **User Authentication** (Login & Registration)
- **API Integration** (Connected to a backend hosted on a VM)
- **Responsive Design** (Optimized for both mobile and desktop users)
- **Comprehensive Testing** (100% Jest test coverage)
- **Performance Optimized** (Lazy loading, efficient scripts, and optimized assets)

## 🌐 Project Structure
```
frontend/
│── pages/
│   ├── home.html          # Homepage
│   ├── login.html         # Login page
│   ├── register.html      # Registration page
│   ├── dashboard.html     # User dashboard
│   ├── settings.html      # User settings page
│── assets/
│   ├── css/
│   │   ├── styles.css     # Main styles
│   │   ├── login.css      # Login page styles
│   ├── js/
│   │   ├── main.js        # Main JavaScript logic
│   │   ├── api.js         # API calls
│   │   ├── auth.js        # Authentication logic
│   │   ├── tests/         # Jest test files
│   ├── images/            # Static assets
│── index.html             # Redirects to home.html
│── package.json           # Project dependencies
│── README.md              # Project documentation
```

## 🔗 Default Address (Entry Point)
The frontend is accessible at:

🔗 [**http://energywise.ddns.net/home.html**](http://energywise.ddns.net/home.html)

## 🛠️ Installation & Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/EnergyWise-BetaGroup/energy-wise-frontend
   cd frontend-project
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Start a Local Server** (For development/testing)
   ```sh
   npm start
   ```
   Alternatively, use **Live Server** (VS Code Extension) to preview changes.

## 🧪 Testing (Jest)
This project uses **Jest** to test both **HTML structures and JavaScript logic**, achieving **100% coverage**.

### Run Tests:
```sh
npm test
```

### Test Coverage Report:
```sh
npm run coverage
```

## 🔧 Backend Connection
The frontend interacts with a backend hosted on a **Virtual Machine (VM)**. Ensure the backend service is running and accessible via the configured API URL.

### API Base URL:
```sh
http://backend-energywise.ddns.net/api/
```

### Example API Endpoints:
| Endpoint          | Method | Description        |
|------------------|--------|--------------------|
| `/login`    | POST   | User Login        |
| `/register` | POST   | User Registration |
| `/profile`  | GET    | Display User Data   |
| `/stats`  | GET    | Fetch User Data   |
| `/actionPage`  | GET    | Fetch User Data   |

## 🚀 Deployment
The project is deployed at [**http://energywise.ddns.net/home.html**](http://energywise.ddns.net/home.html).

For hosting:
- **Frontend**: Hosted on a custom domain using **Dynamic DNS (DDNS)**.
- **Backend**: Hosted on a **VM server**.

## 🛠️ Troubleshooting
- If Jest tests fail, try:
  ```sh
  npm test -- --clearCache
  ```
- If styling is not applied, ensure correct file paths are used in `<link>` tags.
- Ensure the backend is **running and accessible** before testing API calls.

## 📜 License
This project is licensed under La Fosse Academy.

---

