const Input = ({ name, type, placeholder, onChange, value }) => {
  return (
    <div className="mb-3">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="px-3 form-control"
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
