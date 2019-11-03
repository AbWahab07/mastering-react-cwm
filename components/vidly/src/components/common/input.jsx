import React from "react";

const Input = ({ name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        autoFocus
        id={name}
        name={name}
        type="text"
        className="form-control"
      />

      {/** If error is truthy only then this message will be displayed */}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
