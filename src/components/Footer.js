import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <p className="footer__text">
          <a className="footer__link" href="#">
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
    </div>
  );
}

export default Footer;
