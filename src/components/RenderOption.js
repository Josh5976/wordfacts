import React from "react";

function RenderOption({ data }) {
  const [isSentence, setIsSentence] = React.useState(false);
  const keys = Object.keys(data);

  const title = keys[1] && keys[1].charAt(0).toUpperCase() + keys[1].slice(1);
  const info = data[keys[1]];


  React.useEffect(() => {
    if (title === "Examples" || title === "Definition") {
      setIsSentence(true);
    } else {
      setIsSentence(false);
    }
  }, [setIsSentence, title])


  return (
    <section className="option">
      <h1 className="option__title">{title}</h1>
      {info && (
        <>
          {isSentence ? (
            <ul className="option__list">
              {info.map((fact, i) => {
                const item = fact.charAt(0).toUpperCase() + fact.slice(1) + ".";
                return (
                  <li key={i} className="option__list-item">
                    {item}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className={`option__text ${info.length< 3 && 'option__text_type_small'}`}>{info.join(", ")}</p>
          )}
        </>
      )}
    </section>
  );
}

export default RenderOption;
