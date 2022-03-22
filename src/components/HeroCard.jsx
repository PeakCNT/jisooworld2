import react from "react";
import * as bootstrap from "bootstrap";
import "../components/HeroCard.css";
import CardPNG from "../asset/Album.png";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroCard = () => {
  return (
    <>
      {/* <div
        className="footer is-dark"
        style={{ display: "flex", justifyContent: "center", padding: "3rem" }}
      >
        <article class="postcard light pink">
          <a class="postcard__img_link">
            <img class="postcard__img" src={CardPNG} alt="Image Title" />
          </a>
          <div class="postcard__text" style={{ color: "black" }}>
            <h1 class="postcard__title blue">
              <a href="#">Blackpink 2022 Welcoming Collection</a>
            </h1>
            <div class="postcard__subtitle small">
              <p>Pre-order period : 14/2/2022-03/03/2022</p>
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              fugiat asperiores inventore beatae accusamus odit minima enim,
              commodi quia, doloribus eius! Ducimus nemo accusantium maiores
              velit corrupti tempora reiciendis molestiae repellat vero. Eveniet
              ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum
              dolores nobis enim quidem excepturi, illum quos!
            </div>
            <button class="button is-pink">Pre-order Now!!!</button>
          </div>
        </article>
      </div> */}
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={CardPNG} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={CardPNG} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={CardPNG} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default HeroCard;
