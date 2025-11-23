import useAuth from "../action";
import Input from "../../../widget/Input";
import Logo from "../../../assets/images/logo-jb.png";
import ButtonSubmit from "../../../widget/BunttonSubmit";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { form, handleChange, handleSubmit, loading } = useAuth();

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

              <h3 className="text-center text-auth mb-3">Sign Up</h3>

              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  placeholder="FullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  placeholder="Confirmed Password"
                  name="comfirmedPassword"
                  value={form.comfirmedPassword}
                  onChange={handleChange}
                />

                <ButtonSubmit loading={loading} label="Sign Up" />
                <p className="text-center mb-0">
                  Already have an account?{" "}
                  <Link to="/jobposting/signin" className="text-color-sign">
                    Sign in
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

export default SignUp;
