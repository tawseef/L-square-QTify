import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/Search-Icon.svg"
import "./searchbox.css";

function searchbox({ placeholder }) {
  const onSubmit = (e) => {
    e.preventDefault();
    /////////Code
  }

  return (
    <>
      <form className="wrapper" onSubmit={(e) => onSubmit(e)}>
        <input type="text" class="searchclass" placeholder={placeholder}/>
        <button className="searchButton" type="submit">
          < SearchIcon />
        </button>
      </form>
    </>
  );
}

export default searchbox;
