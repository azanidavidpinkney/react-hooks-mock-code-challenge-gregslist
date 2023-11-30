import React from "react";
import Search from "./Search";

function Header({setFilter}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setFilter={setFilter} />
    </header>
  );
}

export default Header;
