import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../index.css";
import Courses from "./Courses";
import Profile from "./Profile";
import Matches from "./Matches";

function Dashboard() {
  return (
    <div className="main-bg flex flex-col gap-8 box-border p-8 text-white items-center">
      <div className="text-center tracking-widest bg-gradient-to-r from-blue-600 via-purple-400 to-pink-600 rounded-md px-4 py-2 w-full">Dashboard</div>
        <div className="w-full flex gap-8 justify-items-stretch box-border">
            <Profile/>
            <Matches/>
        </div>
        <div className="w-full">
            <Courses/>
        </div>
    </div>
  );
}

export default Dashboard;
