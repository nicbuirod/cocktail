import React from "react";
import { CocktailList } from "../components/cocktailList";
import { Modal } from "../components/modal";
import { useSelector } from "react-redux";

const Cocktails = () => {
  const { open } = useSelector((state) => state.modal);
  return (
    <div>
      {open && <Modal />}
      <CocktailList />
    </div>
  );
};

export default Cocktails;
