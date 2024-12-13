import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./views/Landing.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Navigate to="/landing" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
