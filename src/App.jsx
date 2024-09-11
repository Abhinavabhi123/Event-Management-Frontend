import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import { Toaster } from "sonner";

const LandingPage = React.lazy(() => import("./Pages/LandingPage"));
const LoginPage = React.lazy(() => import("./Pages/LoginPage"));
const EventPage = React.lazy(() => import("./Pages/EventPages"));

export default function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/events" element={<EventPage />} />
          </Routes>
        </Suspense>
      </Router>
      <Toaster position="top-center" richColors expand={false} />
    </div>
  );
}
