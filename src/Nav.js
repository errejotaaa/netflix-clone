import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png"
        alt="Netflix logo"
      />
      <img
        className="nav__avatar "
        src="https://begmetobuyit.com/application/css/images/noImage.jpg"
        alt="avatar"
      />
    </div>
  );
}

export default Nav;
