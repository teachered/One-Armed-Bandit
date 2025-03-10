import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
