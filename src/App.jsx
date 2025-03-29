import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import CreatePost from "./pages/CreatePost";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-base-200">
        <Navbar />
        <div className="flex-1 p-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
