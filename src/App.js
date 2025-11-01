// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Home from "./Screens/user/home/Home";
import About from "./Screens/user/about/About";
import Contact from "./Screens/user/contact/Contact";
import Product from "./Screens/user/product/Product";
import Training from "./Screens/user/training/Training";
import { Route, Routes } from "react-router";
import NavbarComponent from "./assest/components/user/navbarComponent/NavbarComponent";

function App() {
  return (
    

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
      <Route path="/training" element={<Training />} />
      <Route path="/navbarComponent" element={<NavbarComponent />} />
    </Routes>

    //  <>
    //   <h1>My First React Project</h1>
    //      <Home />
    //      <Contact />
    //      <Product />
    //      <About />
    // </>
  );
}

export default App;
