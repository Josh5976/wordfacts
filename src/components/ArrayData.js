import React from "react";

function ArrayData({ data, id }) {
  const title = id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <>
      <h3 className="datasection__info-title">{title}</h3>
      <ul className="datasection__list">
        {data.map((fact, i) => {
          const item = fact.charAt(0).toUpperCase() + fact.slice(1) + ".";
          return (
            <li
              key={i}
              className="datasection__list-item datasection__info-text"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ArrayData;
