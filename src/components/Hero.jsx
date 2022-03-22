import react from "react";
import "../index.css";
import "../bulma.css";
import heroPng from "../asset/Hero.png";

const Hero = () => {
  return (
    <section class="hero is-pink is-fullheight-with-navbar">
      <div className="hero-body" style={{ padding: "0" }}>
        <div className="columns hero-content">
          <div className="column is-half pt-hero">
            <h1
              className="title is-1"
              style={{ display: "flex", justifyContent: "center" }}
            >
              JisooWorld
            </h1>
            <div
              className="column is-size-5"
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <p>Welcome to the most popular fansite of Blackpink's Jisoo. </p>
            </div>
            <div
              className="column is-size-5"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <p>Please enjoy with us here.</p>
            </div>
          </div>
          <div className="column is-desktop pl-hero-img">
            <img
              className="image is-hero"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              src={heroPng}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
