import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <p className="copyright">
        {" "}
        <a
          href="https://github.com/Rina707S/weather-react"
          alt="github"
          target="_blank"
          rel="noreferrer"
        >
          Open sourced
        </a>
        , created by{" "}
        <a
          href="https://www.linkedin.com/in/ekaterina-romanenkova-9689b4211/"
          alt="contactUrl"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Rina R
        </a>
      </p>
    </div>
  );
}

export default App;
