import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Theme from "../features/theme/components/Theme";

const Main = () => {
  return (
    <Theme>
      <Header />
      <Outlet />
      <Footer />
    </Theme>
  );
};

export default Main;
