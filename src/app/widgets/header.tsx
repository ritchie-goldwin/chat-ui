import React from "react";
import { ThemeIcon } from "../components";

function Header() {
  return (
    <header className="flex items-center mb-4 md:mb-6">
      <h1>
        <span className="header-text from-cgRed to-fulvous">Chat UI</span>
      </h1>
      <div className="ml-auto">
        <ThemeIcon />
      </div>
    </header>
  );
}

export default Header;
