# My-Mini-Project

A complete React-based web application demonstrating multiple core concepts like routing, authentication, state management, and API integration—all styled with custom handwritten CSS.

## 🌐 Live Demo
[Click here to view the deployed project](https://dev-surajkumar.github.io/My-Mini-Project)

## 📁 Features

### ✅ Routing with React Router
- Uses `react-router-dom` for client-side routing.
- Each page (Home, Signup, Login, Reset, Posts, About, etc.) is accessible without page reloads.
- Configured with `basename="/My-Mini-Project"` for GitHub Pages support.

### 🔐 Authentication
- Signup and Login components.
- Stores and displays username after login using React Context (`AuthContext` and `UserContext`).
- Reset and Passreset pages for account handling.

### 🧾 To-Do List
- Fully functional to-do list component.
- Add, edit, and delete tasks using `useState`.

### 🐶 Posts Component (Dog API)
- Integrates with [TheDogAPI](https://thedogapi.com) to fetch and display dog breeds.
- Uses `useEffect` and `fetch` with API key.
- Displays dog images dynamically based on breed selection.

### 🌗 Toggle Component
- A toggle feature demonstrating state management (e.g., dark/light mode, visibility toggles, etc.).

### 🖌️ Handwritten CSS
- No Bootstrap or third-party UI libraries used.
- Fully customized CSS for layout, design, responsiveness, and components.

### 📦 Folder Structure
mypractice/ ├── public/ ├── src/ │ ├── components/ │ │ ├── Header.jsx │ │ ├── Footer.jsx │ │ ├── Content.jsx │ │ ├── Posts.jsx │ │ ├── Todolist.jsx │ │ └── account/ │ │ ├── Signup.jsx │ │ ├── Login.jsx │ │ ├── Reset.jsx │ │ └── Passreset.jsx │ ├── App.js │ ├── index.js │ ├── AuthContext.js │ ├── UserContext.js │ └── index.css

## 🚀 Deployment
- Deployed using GitHub Pages via `gh-pages`.
- Includes a custom `404.html` redirecting to `/My-Mini-Project/` to handle direct URL navigation.

## ⚙️ Tech Stack
- React
- React Router
- Context API
- Fetch API
- Handwritten CSS (No Bootstrap)
- GitHub Pages


