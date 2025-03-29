import React from "react";
import { SocialNavbar } from "./components/SocialNavbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <SocialNavbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
          Welcome to IncognitiX
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-gray-700 dark:text-gray-300">
            Your social media platform for private and secure communication.
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
