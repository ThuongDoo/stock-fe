import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div className=" ">
      <div className=" flex h-full">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
