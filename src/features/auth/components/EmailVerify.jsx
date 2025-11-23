import { useRef, useState, useEffect } from "react";
import useAuth from "../action";
import Swal from "sweetalert2";

const EmailVerify = () => {
  const { verify, handleVerify, handleResend, loading, updateVerify } =
    useAuth();
  const inputRefs = useRef([]);

  const [timer, setTimer] = useState(59);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    if (timer === 0) {
      setIsResendDisabled(false);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1500);

    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (e, index) => {
    const rawValue = e.target.value;
    const value = rawValue.replace(/\D/g, "");

    if (rawValue !== value) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Only numbers are allowed!",
        timer: 1500,
        showConfirmButton: false,
      });
      return;
    }

    const current = verify.vertificationCode || "";
    const newCode =
      current.substring(0, index) + value + current.substring(index + 1);

    updateVerify({ vertificationCode: newCode });

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResendClick = async () => {
    await handleResend();
    setTimer(59);
    setIsResendDisabled(true);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-auth p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h3 className="text-center mb-3 text-auth">Email Verification</h3>

        <p className="text-center text-auth">
          Verification code sent to: <strong>{verify.email}</strong>
        </p>

        <div className="d-flex justify-content-between mb-3">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="form-control text-center fs-2"
              style={{ width: "50px", height: "50px", fontSize: "1.5rem" }}
              ref={(el) => (inputRefs.current[index] = el)}
              value={verify.vertificationCode?.[index] || ""}
              onChange={(e) => handleOtpChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
            />
          ))}
        </div>

        <button
          className="btn btn-primary w-100 mb-2 btn-submit"
          onClick={handleVerify}
          disabled={loading}
        >
          {loading ? (
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Verify"
          )}
        </button>

        <button
          className="btn btn-outline-secondary w-100 btn-resend"
          onClick={handleResendClick}
          disabled={isResendDisabled || loading}
        >
          {isResendDisabled ? `code expire in (${timer}s)` : "Resend Code"}
        </button>
      </div>
    </div>
  );
};

export default EmailVerify;
