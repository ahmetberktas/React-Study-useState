import React, { useState } from "react";

const FormInput = ({ placeholder, onChange, type, changeType, isIcon, isShow, value }) => {
  return (
    <div className="inputBar">
      <input
        onChange={onChange}
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
      />{" "}
      <br></br>
      {isIcon === true && (
        <button type="button" className="show" onClick={changeType}>
          {isShow === false ? (
            <i className="fa-solid fa-eye"></i>
          ) : (
            <i className="fa-solid fa-eye-slash"></i>
          )}
        </button>
      )}
    </div>
  );
};

export default FormInput;
