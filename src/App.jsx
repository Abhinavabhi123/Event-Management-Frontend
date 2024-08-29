import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LandingPage = React.lazy(() => import("./Pages/LandingPage"));
const LoginPage = React.lazy(() => import("./Pages/LoginPage"));

export default function App() {
  return (
    <Router>
      <Suspense
        fallback={<div className="w-screen h-dvh bg-green-500">Loading...</div>}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
