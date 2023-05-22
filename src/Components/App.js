import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstPage from "./App/FirstPage";
import SecondPage from "./App/SecondPage";
import ThirdPage from "./App/ThirdPage";
import PhotosPage from "./App/PhotosPage";
import HeadPage from "./App/HeadPage";

const App = () => {
  return (
    <Router>
      <HeadPage />
      <Routes>
        <Route path="/" element={<PhotosPage />} />
        <Route path="/service" element={<FirstPage />} />
        <Route path="/about" element={<SecondPage />} />
        <Route path="/contact" element={<ThirdPage />} />
      </Routes>
    </Router>
  );
};

export default App;
