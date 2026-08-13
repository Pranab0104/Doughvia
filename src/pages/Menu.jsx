import React from "react";

const Menu = () => {
  return (
    <div className="menuPage">
      <h1>Our Best Sells !</h1>

      <p>
        " Our Signature Collection showcases the bakery's finest handcrafted
        creations, prepared fresh each day with carefully selected ingredients
        and timeless recipes. From buttery croissants and artisan breads to
        decadent cakes and delicate pastries, every item is baked with passion,
        precision, and a commitment to delivering unforgettable flavor in every
        bite.".
      </p>
      <div className="menucontainer">
        <div className="Box">
          <img
            src={`${import.meta.env.BASE_URL}images/Crossiant.png`}
            alt="Croissant"
          />
          <h1>croissant</h1>
        </div>
        <div className="Box">
          <img
            src={`${import.meta.env.BASE_URL}images/Artisticbread.png`}
            alt="Artisan Sourdough"
          />
          <h1>Artisan Sourdough</h1>
        </div>
        <div className="Box">
          <img
            src={`${import.meta.env.BASE_URL}images/cakes.png`}
            alt="Cakes"
          />
          <h1>Cakes</h1>
        </div>
        <div className="Box">
          <img
            src={`${import.meta.env.BASE_URL}images/chocolate.png`}
            alt="Chocolate treats"
          />
          <h1>chocolate treats</h1>
        </div>
        <div className="Box">
          <img
            src={`${import.meta.env.BASE_URL}images/rolls.png`}
            alt="Sweet rolls"
          />
          <h1>sweet rolls</h1>
        </div>
      </div>
    </div>
  );
};

export default Menu;
