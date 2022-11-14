import React from "react";

function StringData({ data, id }) {
  const title = (id.charAt(0).toUpperCase() + id.slice(1))
    .split(/(?=[A-Z])/)
    .join(" ");
  if (Array.isArray(data)) {
    data = data.join(", ");
  }

  return (
    <>
      <h3 className="datasection__info-title">{title}</h3>
      <p className="datasection__info-text">{data}</p>
    </>
  );
}

export default StringData;
