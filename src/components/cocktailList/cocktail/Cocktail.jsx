import React from "react";
import "./cocktail.scss";

const Cocktail = ({ name, image, category, id, handleClick }) => {
  const redirect = () => {
    handleClick(id);
  };

  return (
    <div className="cocktail" onClick={redirect} data-testid="cocktail">
      <div className="cocktail__img">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail__detail">
        <h2 className="cocktail__detail__name">{name}</h2>
        <h3 className="cocktail__detail__category">{category}</h3>
      </div>
    </div>
  );
};

export default Cocktail;
