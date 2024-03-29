import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Root() {
  return (
    <div className=" h-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
