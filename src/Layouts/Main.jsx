import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="w-full flex">
       <div className="w-11/12 m-auto">
        <Nav />
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
};

export default Main;