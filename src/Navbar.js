import React from "react";

import logo from './logo.png';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand heading" href="/">
          <img id="main-logo" src={logo} alt="hola" />
            thriveU
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active components" aria-current="page" href="/diet">DIET &nbsp;</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active components" aria-current="page" href="/screentime">
                  SCREEN TIME &nbsp;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
