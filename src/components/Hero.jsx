import react from "react";
import "bulma/css/bulma.css";
import "../index.css";

const Hero = () => {
  return (
    <section class="hero is-pink is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="columns is-justify-content-center">
          <div className="column is-three-fifths pt-8">
            <h1 className="title is-1">Blackpink 2022 Welcoming Collection</h1>
            <div className="columns is-align-content-center">
              <div className="column " style={{'display':'flex','justifyContent':'center'}}>
                <button class="button is-dark">Pre-order Now!!!</button>
              </div>
            </div>
          </div>
          <div className="column">
            <img
              className="image"
              src="https://pbs.twimg.com/media/FLicmSQaMAAwdya?format=jpg&name=4096x4096"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
