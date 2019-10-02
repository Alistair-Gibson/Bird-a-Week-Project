import React from "react";

const NavBar = ({ onRouteChange }) => {
  return (
    <div>
      <nav className="pa3 pa4-ns flex justify-between">
        <div>
          <p
            onClick={() => onRouteChange("home")}
            className="f1 link dim black b dib mr3 pointer"
            href=""
          >
            Bird A Week Project
          </p>
        </div>

        <div className="flex items-center">
          <p
            onClick={() => onRouteChange("home")}
            className="link dim gray    f6 f5-ns mr3 pointer"
          >
            Home
          </p>
          <p
            onClick={() => onRouteChange("about")}
            className="link dim gray    f6 f5-ns mr3 pointer"
          >
            About
          </p>
          <p
            onClick={() => onRouteChange("contact")}
            className="link dim gray    f6 f5-ns mr3 pointer"
          >
            Contact
          </p>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
