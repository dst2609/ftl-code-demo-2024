import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <fieldset>
        <legend>Header.jsx</legend>
        <header className="app-header">
          <h1>{props.title}</h1>
        </header>
      </fieldset>
    </>
  );
};

export default Header;
