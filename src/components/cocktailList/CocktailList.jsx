import React, { useEffect } from "react";
import { fetchAllCocktails } from "../../store/slices/cocktails";
import { useDispatch, useSelector } from "react-redux";
import { Cocktail } from "./cocktail";
import { stateModal } from "../../store/slices/modal";
import "./cocktail-list.scss";

const CocktailList = () => {
  const { list: cocktail } = useSelector((state) => state.cocktails);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCocktails());
  }, [dispatch]);

  const goToDetails = (id) => {
    dispatch(stateModal(id));
  };

  return (
    <div className="container">
      <h1 className="container__title">Listado de cockteles</h1>
      <div className="container__list">
        {cocktail.map(
          ({ strDrink, strDrinkThumb, idDrink, strCategory }, index) => {
            return (
              <Cocktail
                name={strDrink}
                image={strDrinkThumb}
                id={idDrink}
                category={strCategory}
                handleClick={goToDetails}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default CocktailList;
