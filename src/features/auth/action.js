import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import {
  setSignUp,
  clearSignUp,
  setLoading,
  setVerify,
  clearVerify,
  setLogin,
  clearLogin,
  setToken,
  setUser,
  logout,
} from "./slice";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://192.168.18.101:8081/api/v1/seeker/auth";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useSelector((state) => state.auth.valueSignUp);
  const login = useSelector((state) => state.auth.valueLogin);
  const verify = useSelector((state) => state.auth.valueVerify);
  const verifyResend = useSelector((state) => state.auth.valueResend);
  const loading = useSelector((state) => state.auth.loading);

  // -----------------------------------------------
  // GLOBAL ERROR HANDLER
  // -----------------------------------------------
  const handleApiError = (err) => {
    const descriptions = err.response?.data?.error?.description;

    if (descriptions && Array.isArray(descriptions)) {
      const messages = descriptions
        .map(
          (d) => `
            <div class="error-item">
              <span class="field">${d.field}</span>
              <span class="reason">${d.reason}</span>
            </div>`
        )
        .join("");

      return Swal.fire({
        icon: "error",
        title:
          "<strong style='font-size:22px; color:#e74c3c'>Validation Error</strong>",
        html: `<div class="error-list">${messages}</div>`,
        confirmButtonColor: "#279e9b",
        width: 450,
      });
    }

    Swal.fire({
      icon: "error",
      title: "Request Failed",
      text: err.response?.data?.error?.message || err.message,
    });
  };

  // -----------------------------------------------
  // SIGN UP
  // -----------------------------------------------
  const signup = async () => {
    try {
      dispatch(setLoading(true));

      if (form.password !== form.comfirmedPassword) {
        return Swal.fire({
          icon: "error",
          title: "Password Mismatch",
          text: "Passwords do not match!",
        });
      }

      const response = await axios.post(`${BASE_URL}/register`, form);

      // Save email to localStorage for verification
      localStorage.setItem("verifyEmail", form.email);

      navigate("/jobposting/verify");
      dispatch(setVerify({ email: form.email, vertificationCode: "" }));
      dispatch(clearSignUp());

      return response.data;
    } catch (err) {
      handleApiError(err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  // -----------------------------------------------
  // VERIFY OTP
  // -----------------------------------------------
  const handleVerify = async () => {
    try {
      dispatch(setLoading(true));

      const payload = {
        email: verify.email,
        vertificationCode: verify.vertificationCode,
      };

      await axios.post(`${BASE_URL}/verify`, payload);

      Swal.fire({
        icon: "success",
        title: "Verification Successful!",
        text: "Your account has been verified.",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => navigate("/jobposting/signin"));

      dispatch(clearVerify());
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: err.response?.data?.error?.description,
        confirmButtonColor: "#279e9b",
      });

      handleApiError(err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  // -----------------------------------------------
  // RESEND OTP
  // -----------------------------------------------
  const handleResend = async () => {
    try {
      dispatch(setLoading(true));
      await axios.post(`${BASE_URL}/resentVerify`, {
        email: verify.email,
      });
      Swal.fire({
        icon: "success",
        title: "Verification Code Sent!",
        text: "A new OTP has been sent to your email.",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      handleApiError(err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  // -----------------------------------------------
  // LOGIN
  // -----------------------------------------------
  const handleLogin = async () => {
    try {
      dispatch(setLoading(true));

      const response = await axios.post(`${BASE_URL}/login`, login);

      if (!response.data?.KEY || !response.data?.DATA) {
        throw new Error("Tokens or user data not received from server.");
      }

      const { accessToken, refreshToken } = response.data.KEY;
      const user = response.data.DATA;

      // Save to localStorage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(user));

      // Save to Redux
      dispatch(setUser(user));
      dispatch(setToken({ accessToken, refreshToken }));

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/jobposting");
      });

      dispatch(clearLogin());
    } catch (err) {
      handleApiError(err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  // -----------------------------------------------
  // FORM UPDATERS
  // -----------------------------------------------
  const updateForm = (data) => dispatch(setSignUp({ ...form, ...data }));
  const updateVerify = (data) => dispatch(setVerify({ ...verify, ...data }));
  const updateLogin = (data) => dispatch(setLogin({ ...login, ...data }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateForm({ [name]: value });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    updateLogin({ [name]: value });
  };

  // -----------------------------------------------
  // SUBMIT HANDLERS
  // -----------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) signup();
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loading) handleLogin();
  };

  // -----------------------------------------------
  // LOGOUT
  // -----------------------------------------------
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(logout());
    navigate("/signin");
  };

  // -----------------------------------------------
  // GET STORED USER
  // -----------------------------------------------
  const getStoredUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };

  return {
    // states
    form,
    verify,
    login,
    verifyResend,
    loading,

    // updates
    updateVerify,
    updateLogin,

    // handlers
    handleChange,
    handleSubmit,
    handleLoginChange,
    handleLoginSubmit,
    handleVerify,
    handleResend,
    handleLogout,
    getStoredUser,
  };
};

export default useAuth;
