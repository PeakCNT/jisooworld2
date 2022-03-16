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
        <Link to="/" class="is-size-2">
          JisooWorld
        </Link>

        <button
          className="navbar-burger burger"
          // style={{ transform: show ? "rotate(90deg)" : "" }}
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
          <Link
            to="/"
            class="navbar-item is-dark"
            style={{ borderRadius: "6px" }}
          >
            Home
          </Link>

          <Link
            to="/biography"
            class="navbar-item is-dark"
            style={{ borderRadius: "6px" }}
          >
            Biography
          </Link>

          <Link
            to="/gallery"
            class="navbar-item is-dark"
            style={{ borderRadius: "6px" }}
          >
            Gallery
          </Link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-item is-dark">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item is-dark">About</a>
              <a class="navbar-item is-dark">Jobs</a>
            </div>
          </div>
        </div>
      )}

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <Link to="/" class="navbar-item" style={{ borderRadius: "6px" }}>
            Home
          </Link>

          <Link
            to="/biography"
            class="navbar-item"
            style={{ borderRadius: "6px" }}
          >
            Biography
          </Link>

          <Link
            to="/gallery"
            class="navbar-item"
            style={{ borderRadius: "6px" }}
          >
            Gallery
          </Link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
