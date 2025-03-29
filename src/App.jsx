import React from "react";
import { SocialNavbar } from "./components/SocialNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import CreatePost from "./pages/CreatePost";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base-200">
        <SocialNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <SocialNavbar />
        <main className="p-4">
          <h1 className="text-2xl font-bold">Welcome to IncognitiX</h1>
          <p className="text-gray-700 dark:text-gray-300">
            An anonymous social media platform.
          </p>
        </main>
      </div>
    </Router>
  );
}

export default App;
