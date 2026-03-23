import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project was coded by Vanessa Teixeira and is open-sourced on {""}
          <a
            href="https://github.com/vanessateixeira92/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://nimbusly-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
