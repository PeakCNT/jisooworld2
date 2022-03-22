import react from "react";
import "../index.css";
import "../bulma.css";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer is-dark" style={{ padding: "3rem" }}>
      <div class="content">
        <div className="columns is-dark" style={{ alignItems: "center" }}>
          <div
            className="column"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              className="text-footer"
              style={{ marginRight: "80px", color: "#FFF" }}
            >
              Visit my github for more project : PeakCNT
            </h1>
            <a
              href="https://github.com/PeakCNT"
              target="_blank"
              className="icon-footer"
              style={{ color: "#FFF" }}
            >
              <FaGithub size={50} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
