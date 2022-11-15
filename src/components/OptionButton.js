import React from "react";

function OptionButton({ onChange, param, id, isActive }) {
  const title = (param.charAt(0).toUpperCase() + param.slice(1))
    .split(/(?=[A-Z])/)
    .join(" ");

  const clickHandler = (e, keyID) => {
    onChange(e, keyID);
  };

  const optionButtonClass = `main__params-item ${
    isActive === id ? "main__params-item_active" : ""
  }`;

  return (
    <button
      className={optionButtonClass}
      type="button"
      onClick={(e) => clickHandler(e, id)}
      name={param}
    >
      {title}
    </button>
  );
}

export default OptionButton;
