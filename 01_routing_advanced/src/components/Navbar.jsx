import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 px-4 bg-cyan-900 ">
      <h2 className="text-2xl font-bold">Sheryians</h2>
      <div className="flex gap-10">
        <Link className="text-md font-medium" to="/">Home</Link>
        <Link className="text-md font-medium" to="/about">About</Link>
        <Link className="text-md font-medium" to="/course">Courses</Link>
        <Link className="text-md font-medium" to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
