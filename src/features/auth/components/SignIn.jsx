const SignIn = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card p-4 shadow"
        style={{ width: "380px", borderRadius: "16px" }}
      >
        <h3 className="text-center mb-4">Sign In</h3>

        <form onSubmit="">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-2">
            Sign In
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Don't have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
