import react, { useState, useEffect } from "react";
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
        <Link to="/" class="is-size-2" style={{ color: "black" }}>
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
        <div
          className="navbar-wrapper is-dark"
          style={{
            position: "absolute",
            background: "linear-gradient(to right, #f650a0, #ff9897)",
            width: "100%",
            borderRadius: "6px",
          }}
        >
          <Link to="/" class="navbar-item " style={{ borderRadius: "6px" }}>
            Home
          </Link>

          <Link
            to="/biography"
            class="navbar-item "
            style={{ borderRadius: "6px" }}
          >
            Biography
          </Link>

          <Link
            to="/gallery"
            class="navbar-item "
            style={{ borderRadius: "6px" }}
          >
            Gallery
          </Link>

          <Link
            to="/about"
            class="navbar-item "
            style={{ borderRadius: "6px" }}
          >
            About me
          </Link>
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

          <Link to="/about" class="navbar-item" style={{ borderRadius: "6px" }}>
            About me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
