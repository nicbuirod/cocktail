import React from "react";
import "./modal.scss";
import { useSelector, useDispatch } from "react-redux";
import { stateModalClose } from "../../store/slices/modal";

const Modal = () => {
  const { list: cocktailList } = useSelector((state) => state.cocktails);
  const { idDrink: cocktail } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const detail = cocktailList.find((e) => {
    return e.idDrink === cocktail;
  });

  const {
    idDrink,
    strAlcoholic,
    strCategory,
    strDrinkThumb,
    strInstructionsES,
  } = detail;

  const ingredients = [
    detail.strIngredient1,
    detail.strIngredient2,
    detail.strIngredient3,
    detail.strIngredient4,
    detail.strIngredient5,
    detail.strIngredient6,
    detail.strIngredient7,
    detail.strIngredient8,
    detail.strIngredient9,
    detail.strIngredient10,
    detail.strIngredient11,
    detail.strIngredient12,
    detail.strIngredient13,
    detail.strIngredient14,
    detail.strIngredient15,
  ];

  const measure = [
    detail.strMeasure1,
    detail.strMeasure2,
    detail.strMeasure3,
    detail.strMeasure4,
    detail.strMeasure5,
    detail.strMeasure6,
    detail.strMeasure7,
    detail.strMeasure8,
    detail.strMeasure9,
    detail.strMeasure10,
    detail.strMeasure11,
    detail.strMeasure12,
    detail.strMeasure13,
    detail.strMeasure14,
    detail.strMeasure15,
  ];

  const elementsNoNull = ingredients.filter((e) => e !== null);
  const measureNoNull = measure.filter((e) => e !== null);

  const ingredientList = (
    <ul>
      {elementsNoNull.map((e, index) => (
        <li key={index}>{e}</li>
      ))}
    </ul>
  );
  const measureList = (
    <ul>
      {measureNoNull.map((e, index) => (
        <li key={index}>{e}</li>
      ))}
    </ul>
  );

  const handleClose = () => {
    dispatch(stateModalClose());
  };

  console.log("idecontrado", detail);
  return (
    <div className="modal">
      <div className="modal__container">
        <button className="close__modal" onClick={handleClose}>
          X
        </button>
        <div className="modal__container__up">
          <div className="modal__container__up__data">
            <h2>Identificación: {idDrink}</h2>
            <h3>TIpo de bebida {strAlcoholic}</h3>
            <h3>Categoria: {strCategory}</h3>
            <div className="modal__table">
              {ingredientList}
              {measureList}
            </div>
          </div>
          <div className="modal__container__up__image">
            <img src={strDrinkThumb} alt={strCategory} />
          </div>
        </div>
        <p className="instructions">Instrucciones: {strInstructionsES}</p>
      </div>
    </div>
  );
};

export default Modal;
