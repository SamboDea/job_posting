import React from "react";

const ButtonSubmit = ({
  loading = false,
  label = "Submit",
  disabled = false,
}) => {
  return (
    <div className="mb-3">
      <button
        type="submit"
        className="btn-submit w-100 d-flex justify-content-center align-items-center gap-2"
        disabled={disabled || loading}
      >
        {loading && (
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        {!loading && label}
      </button>
    </div>
  );
};

export default ButtonSubmit;
