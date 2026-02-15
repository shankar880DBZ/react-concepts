import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Course from "./pages/Course.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import Product from "./pages/Product.jsx";
import Men from "./pages/Men.jsx";
import Women from "./pages/Women.jsx";
import Kid from "./pages/Kid.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Navbar2 from "./components/Navbar2.jsx";

const App = () => {
  return (
    <>
      <div className="bg-zinc-900 w-full h-screen text-white">
        <Navbar />
        <Navbar2/>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course_detail" element={<CourseDetail />} />

          <Route path="/product" element={<Product />}>
            <Route index element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="kid" element={<Kid />} />
          </Route>

          <Route path="*" element={< NotFound/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default App;
