import React from "react";
import ArrayData from "./ArrayData";
import StringData from "./StringData";

function DataSection({ item, keys, definition, example }) {
  const itemDefinition =
    item[definition].charAt(0).toUpperCase() + item[definition].slice(1) + ".";

  return (
    <div className="datasection">
      <div className="datasection__header">
        <h2 className="datasection__title">Definition</h2>
        <p className="datasection__info-text">{itemDefinition}</p>
      </div>
      <div className="datasection__info">
        {keys.map((key, i) => {
          let data = item[key];

          return <StringData data={data} id={key} key={i} />;
        })}
        {example && <ArrayData data={item[example]} id={example} />}
      </div>
    </div>
  );
}

export default DataSection;
