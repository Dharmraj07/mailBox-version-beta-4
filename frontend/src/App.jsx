import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load components
const SignUp = React.lazy(() => import("./pages/SignUp"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const Inbox = React.lazy(() => import("./components/Inbox"));
const SentBox = React.lazy(() => import("./components/SentBox"));
import AppNavbar from "./components/AppNavbar";

const App = () => {
  return (
    <div>
      <AppNavbar />

      {/* Suspense with fallback for loading state */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/sent" element={<SentBox />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default React.memo(App);
