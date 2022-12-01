import React from "react";
import FullRender from "./FullRender";
import OptionButton from "./OptionButton";
import RenderOption from "./RenderOption";

function Main({ result, rhymes, searchOption, optionData }) {
  // set active button
  const [active, setActive] = React.useState(-1);

  // Check to see if word has been searched and data is
  // available to display
  const dataCheck = () => {
    if (result && rhymes) {
      return true;
    } else {
      return false;
    }
  };

  // Get all keys(result.results) to render buttons
  // Puts all of keys of (result.results) into a list
  // Then filters out any duplicated keys to create individual buttons
  const getAllKeys = () => {
    let options = [];
    result.results.forEach((obj) => {
      Object.keys(obj).forEach((key) => {
        options.push(key);
      });
    });
    const getUnique = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    let finalList = options.filter(getUnique);
    finalList.splice(finalList.indexOf("partOfSpeech"), 1);
    return finalList;
  };

  // GET Data for selected Option
  function changeOptionClick(e, value) {
    setActive(value);
    searchOption(e.target.name);
  }

  return (
    <main className="main">
      {dataCheck() ? (
        <>
          <h2 className="main__title">
            {result.word.charAt(0).toUpperCase() + result.word.slice(1)}
          </h2>
          <div className="main__params">
            {/* Render all the option buttons */}
            {getAllKeys().map((item, i) => {
              return (
                <OptionButton
                  onChange={changeOptionClick}
                  param={item}
                  id={i}
                  key={i}
                  isActive={active}
                />
              );
            })}
            <OptionButton
              onChange={changeOptionClick}
              param={"Everything"}
              id={-1}
              key={-1}
              isActive={active}
            />
          </div>
          {/* if no option is selected, render all word data */}
          {active === -1 ? (
            <FullRender result={result} rhymes={rhymes} />
          ) : (
            // render data of selected option
            <>
              <RenderOption data={optionData} />
            </>
          )}
        </>
      ) : (
        <p className="main_default">
          Enter a word in the Search bar to see results.
        </p>
      )}
    </main>
  );
}

export default Main;
