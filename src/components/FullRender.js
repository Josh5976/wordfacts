import React from "react";
import DataSection from "./DataSection";

function FullRender({ result, rhymes }) {
  const syllables = result.syllables.list.join("-");
  let keys = [];
  return (
    <div className="result">
      <h2 className="result__title">Frequency</h2>
      <p className="result__text">{result.frequency}</p>
      <h2 className="result__title">Syllables</h2>
      <p className="result__text">{syllables}</p>
      <h2 className="result__title">Rhymes</h2>
      <p className="result__text">{rhymes.rhymes["all"].join(", ")}</p>
      {result.results.map((item, i) => {
        keys = Object.keys(item);
        const definition = keys.shift();
        const findExample = () => {
          if (keys.includes("examples")) {
            return keys.splice(keys.indexOf("examples"), 1).toString();
          }
        };
        const example = findExample();
        return (
          <DataSection
            item={item}
            keys={keys}
            definition={definition}
            example={example}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default FullRender;
