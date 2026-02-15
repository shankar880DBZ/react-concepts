# What is Routing in React?

Routing allows users to navigate between different pages or components in a **Single Page Application (SPA)** without reloading the browser.
React applications use **React Router** to handle navigation and render components based on the URL.

## Installation
Install React Router in your project:
```
npm install react-router-dom
```
# 🧭 React Router Components — Usage Guide

This section explains where and how the main React Router components are used in a React application.

---

## 🌐 1. `BrowserRouter`

### ✅ What is it?

`BrowserRouter` enables routing in your React app using the browser's URL system.

### 📍 Where to Use?

It should wrap your **entire application** (usually in `main.jsx` or `App.jsx`).

### 🧩 Why Use It?

* Provides routing context to all components
* Enables navigation without page reload

### 💻 Example

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

## 🛣️ 2. `Routes`

### ✅ What is it?

`Routes` acts as a container that holds all route definitions.

### 📍 Where to Use?

Inside `App.jsx` or wherever you define application routes.

### 🧩 Why Use It?

* Ensures only the matching route renders
* Organizes all routes in one place

### 💻 Example

```jsx
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

---

## 📍 3. `Route`

### ✅ What is it?

`Route` connects a **URL path** to a specific component.

### 📍 Where to Use?

Inside the `Routes` component.

### 🧩 Why Use It?

* Defines which component loads for a specific URL

### 💻 Example

```jsx
<Route path="/contact" element={<Contact />} />
```

👉 When user visits `/contact`, the `Contact` component renders.

---

## 🔗 4. `Link`

### ✅ What is it?

`Link` is used for navigation between pages without refreshing the browser.

### 📍 Where to Use?

Anywhere you want navigation (Navbar, Sidebar, Buttons, etc.).

### 🧩 Why Use It?

* Prevents full page reload
* Makes SPA fast and smooth

### 💻 Example

```jsx
import { Link } from "react-router-dom";

<nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
</nav>
```

❌ Avoid using `<a href="">` for internal navigation.

---

## 🌳 5. `Outlet`

### ✅ What is it?

`Outlet` is a placeholder used in **nested routing** to render child routes.

### 📍 Where to Use?

Inside a parent component (layout or dashboard).

### 🧩 Why Use It?

* Displays nested child components dynamically
* Helps create layouts with shared UI

### 💻 Example

```jsx
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <Link to="profile">Profile</Link>
      <Link to="settings">Settings</Link>

      {/* Child routes render here */}
      <Outlet />
    </div>
  );
}
```

---

## 🧠 How They Work Together

```
BrowserRouter
      ↓
    Routes
      ↓
     Route
      ↓
     Link (Navigation)
      ↓
    Outlet (Nested UI)
```

---

## ✅ Quick Summary Table

| Component     | Purpose                   | Used In              |
| ------------- | ------------------------- | -------------------- |
| BrowserRouter | Enables routing           | Root file (main.jsx) |
| Routes        | Holds all routes          | App.jsx              |
| Route         | Maps URL → Component      | Inside Routes        |
| Link          | Navigation without reload | Navbar / UI          |
| Outlet        | Shows nested routes       | Parent layout        |

---

## 🚀 Best Practice

* Wrap app once with `BrowserRouter`
* Keep routes centralized
* Use `Link` instead of anchor tags
* Use `Outlet` for layouts & dashboards

---

⭐ This structure helps create scalable and professional React applications.

