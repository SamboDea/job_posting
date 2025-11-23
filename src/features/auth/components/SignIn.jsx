import React, { useState } from "react";
import img from "../../../assets/images/sign-in.png";
import Logo from "../../../assets/images/logo-jb.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signin-bg">
      <div className="signin-card d-flex">
        {/* LEFT SIDE IMAGE */}
        <div className="signin-left">
          <img src={img} alt="sign-in" />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="signin-right">
          <img src={Logo} alt="" />
          <h3 className="text-center mb-4">Sign In</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-2">
              Sign In
            </button>
          </form>

          <p className="text-center mt-3 signin-link">
            Don’t have an account? <a href="#">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
