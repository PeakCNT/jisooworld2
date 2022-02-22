import react from "react";
import "bulma/css/bulma.css";
import "../index.css";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer class="footer pd-footer is-dark">
      <div class="content">
        <div className="columns is-dark">
          <div className="column is-5">
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#FFF",
                margin: "0",
              }}
              class=""
            >
              ❤JisooWorld❤
            </h1>
          </div>
          <div
            className="column"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h1
              className=" text-footer"
              style={{ marginRight: "80px", color: "#FFF" }}
            >
              Instagram : @sooyaaa__
            </h1>
            <a
              href="https://www.instagram.com/sooyaaa__/"
              target="_blank"
              className="icon-footer"
              style={{ color: "#FFF" }}
            >
              <FiInstagram size={50} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
