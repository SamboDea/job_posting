import useAuth from "../action";
import Input from "../../../widget/Input";
import Logo from "../../../assets/images/logo-jb.png";
import ButtonSubmit from "../../../widget/BunttonSubmit";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { login, handleLoginSubmit, handleLoginChange, loading } = useAuth();

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-8 col-lg-4">
          <div className="card shadow-auth">
            <div className="card-body">
              <div className="logo-auth">
                <Link to={"/jobposting"}>
                  <img src={Logo} alt="" />
                </Link>
              </div>
              <h3 className="text-center text-auth mb-3">Sign In</h3>

              <form onSubmit={handleLoginSubmit}>
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={login.email}
                  onChange={handleLoginChange}
                />

                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={login.password}
                  onChange={handleLoginChange}
                />

                <ButtonSubmit loading={loading} label="Sign In" />

                <p className="text-center mb-0">
                  Don't have an account?{" "}
                  <Link to="/jobposting/signup" className="text-color-sign">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
