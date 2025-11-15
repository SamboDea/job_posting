import { Link } from "react-router-dom";
import Logo from "./../assets/images/logo-jb.png";
import ThemeToggle from "../features/theme/components/ThemeToggle";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-0 mt-1">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={Logo} alt="Logo" className="logo-image img-fluid" />
            <h3 className="d-none d-lg-block job-brand">JobPosting</h3>
          </Link>

          <div className="d-flex align-items-center">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-block d-md-none">
              <ThemeToggle />
            </div>
          </div>

          <div
            className="collapse navbar-collapse justify-content-end gap-4"
            id="navbarNavAltMarkup"
          >
            <Link className="login text-docoration-none" to="/signin">
              Sign In
            </Link>
            <Link className="sign-up" to="/signup">
              Sign Up
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
