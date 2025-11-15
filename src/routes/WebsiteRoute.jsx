import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "../layouts/Footer";
import Home from "../pages/website/Home";
import Header from "../layouts/Header";
import Theme from "../features/theme/components/Theme";

const WebsiteRoutes = () => {
  return (
    <Theme>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Theme>
  );
};

export default WebsiteRoutes;
