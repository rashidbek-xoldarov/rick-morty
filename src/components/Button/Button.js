import React from "react";

const Button = ({ name, text, onClick }) => {
  return (
    <div className="mb-2">
      <input
        type="radio"
        class="btn-check"
        name={name}
        id={`${name}-${text}`}
        autocomplete="off"
      />
      <label
        class="btn btn-outline-primary"
        onClick={onClick}
        for={`${name}-${text}`}
      >
        {text}
      </label>
    </div>
  );
};

export default Button;
