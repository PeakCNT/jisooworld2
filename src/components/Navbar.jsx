import react, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import "../index.css";
import { useGlobalContext } from "../context";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { show, setShow, toggleShow } = useGlobalContext();

  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    if (+size > 1080) {
      setShow(false);
    } else {
      setShow(false);
    }
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);

  return (
    <nav
      class="navbar is-pink px-nav"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <h1 class="is-size-2">JisooWorld</h1>

        <button
          className="navbar-burger burger"
          style={{ transform: show ? "rotate(90deg)" : "" }}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => toggleShow()}
        >
          <GiHamburgerMenu size={20} />
          <div className=""></div>
        </button>
      </div>

      {show && (
        <div className="navbar-wrapper is-dark">
          <a class="navbar-item is-dark" href="/">
            Home
          </a>

          <a class="navbar-item is-dark" href="/biography">
            Biography
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-item is-dark">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item is-dark">About</a>
              <a class="navbar-item is-dark">Jobs</a>
              <a class="navbar-item is-dark">Contact</a>
              <hr class="navbar-divider"></hr>
              <a class="navbar-item is-dark">Report an issue</a>
            </div>
          </div>
        </div>
      )}

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="/">
            Home
          </a>

          <a class="navbar-item" href="/biography">
            Biography
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Jobs</a>
              <a class="navbar-item">Contact</a>
              <hr class="navbar-divider"></hr>
              <a class="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
