import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Login.jsx";
import Dashboard from "../../pages/Dashboard.jsx";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute.jsx";

const LocalStorage_part_2 = () => {
  return (
    <div>
      <h1>LocalStorage_part_2</h1>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default LocalStorage_part_2