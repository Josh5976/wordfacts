import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">
          <a className="footer__link" href="home">
            @WordFacts
          </a>{" "}
          by Joshua DeSantis
        </p>
        <p className="footer__info">
          Data provided from{" "}
          <a
            className="footer__link"
            href="https://www.wordsapi.com/"
            rel="noreferrer"
            target="_blank"
          >
            WordsApi
          </a>{" "}
          via{" "}
          <a
            className="footer__link"
            href="https://rapidapi.com/hub"
            rel="noreferrer"
            target="_blank"
          >
            RapidApi
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
