import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

// Importing other components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Results from "./pages/Results/Results";

// This route set up will make NavBar and Footer available app-wide without needing other component
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/search" element={<Search />} /> */}
        <Route path="/results" element={<Results />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
