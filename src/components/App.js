import React from "react";
import Header from "./Header";
import Search from "./Search";
import Main from "./Main";
import Footer from "./Footer";
import api from "../utils/Api";

function App() {
  const [result, setResult] = React.useState("");
  const [rhymes, setRhymes] = React.useState("");
  const [word, setWord] = React.useState("");
  const [optionData, setOptionData] = React.useState({});

  const searchButtonSubmit = (word) => {
    api
      .getAll(word)
      .then((res) => {
        setResult(res);
        setWord(word);
      })
      .catch((err) => console.log(err));

    api
      .getRhymes(word)
      .then((res) => {
        setRhymes(res);
      })
      .catch((err) => console.log(err));
  };

  function getOptionApi(option) {
    api
      .getOption(word, option)
      .then((res) => {
        setOptionData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="page">
      <Header />
      <Search searchButtonClick={searchButtonSubmit} />
      <Main
        result={result}
        rhymes={rhymes}
        optionData={optionData}
        searchOption={getOptionApi}
      />
      <Footer />
    </div>
  );
}

export default App;
