import { Routes, Route } from "react-router-dom";

import Footer from "../layouts/Footer";
import Home from "../pages/website/Home";
import Header from "../layouts/Header";
import Theme from "../features/theme/components/Theme";
import SignIn from "../features/auth/components/SignIn";
import SignUp from "../features/auth/components/SignUp";
import EmailVerify from "../features/auth/components/EmailVerify";

const WebsiteRoutes = () => {
  return (
    <Theme>
      <Routes>
        {/* /jobposting → show Home */}
        <Route
          index
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />

        {/* Nested paths */}
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="verify" element={<EmailVerify />} />
      </Routes>
    </Theme>
  );
};

export default WebsiteRoutes;
