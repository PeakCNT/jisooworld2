import react from "react";
import "bulma/css/bulma.css";
import "../components/HeroCard.css";
import CardPNG from "../asset/Album.png";

const HeroCard = () => {
  return (
    <div
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
            commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit
            corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam
            adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores
            nobis enim quidem excepturi, illum quos!
          </div>
          <button class="button is-pink">Pre-order Now!!!</button>
        </div>
      </article>
    </div>
  );
};

export default HeroCard;
