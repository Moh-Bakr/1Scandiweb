import React from "react";

const InputField = ({ label, labelError, handleFieldChange, errors, type }) => {
  return (
    <div className="mb-4">
      <label className="mb-2 inline-block w-40 font-bold" htmlFor="name">
        {label}
      </label>
      <input
        id={labelError}
        className={`focus:shadow-outline w-64 rounded border border-gray-400 py-2 px-3 leading-tight focus:outline-none ${
          errors[labelError] ? "border-red-500" : ""
        }`}
        type={type}
        name={labelError}
        onChange={handleFieldChange}
      />
      {errors[labelError] && (
        <p className="ml-40 text-red-500">{errors[labelError]}</p>
      )}
    </div>
  );
};

export default InputField;
