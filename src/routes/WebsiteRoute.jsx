import { Routes, Route } from "react-router-dom";

import Footer from "../layouts/Footer";
import Home from "../pages/website/Home";
import Header from "../layouts/Header";
import Theme from "../features/theme/components/Theme";
import SignIn from "../features/auth/components/SignIn";
import SignUp from "../features/auth/components/SignUp";

const WebsiteRoutes = () => {
  return (
    <Theme>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Theme>
  );
};

export default WebsiteRoutes;
