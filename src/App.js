import React from "react";
import "./App.css";
// import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="logo_wrap">
          <a className="home_btn" href="/">
            민집사
            {/* <img className="minzipsa_logo" src=""/> */}
          </a>
        </div>

        <div className="menu_wrap">

        </div>

        <div className="util_wrap">
          <button className="hamburger_btn"></button>
        </div>
      </div>
    </div>
  );
}

export default App;
