// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Home from "./Screens/user/home/Home";
import About from "./Screens/user/about/About";
import Contact from "./Screens/user/contact/Contact";
import Product from "./Screens/user/product/Product";
import Training from "./Screens/user/training/Training";
import { Route, Routes } from "react-router";

function App() {
  return (
    //     <Training />
    //     <>

    //         <Row className="bg-warning" style={{height:400}}>
    //             <Col className="bg-success ml-3" lg={3} sm={12} style={{height:350}}>
    //               <p>ITEM 1</p>
    //             </Col>

    //             <Col className="bg-secondary mt-4" lg={3} sm={12} style={{height:350}}>
    //               <p>ITEM 2</p>
    //             </Col>

    //              {/* <Col className="bg-primary" lg={3} sm={12} style={{height:350}}>
    //             <p>ITEM 3</p>
    //             </Col> */}
    //         </Row>

    // </>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
      <Route path="/training" element={<Training />} />
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
