import React from "react";
import Home from "./Views/Pages/Home/Home";
import Layout from "./Views/Layout/Layout";
import "../src/assets/css/style.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Contact from "./Views/Pages/Contact/Contact";
import About from "./Views/Pages/About/About";
import NGO from "./Views/Pages/NGO/NGO";
import Blogs from "./Views/Pages/Blogs/Blogs";
import IndexDonate from "./Views/Pages/Donate_Medicine/IndexDonate";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<IndexDonate />} />
            <Route path="/ngo" element={<NGO />} />
            <Route path="/blogs" element={<Blogs />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
