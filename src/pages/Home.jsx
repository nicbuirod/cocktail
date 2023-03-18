import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.scss";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Cocktails`);
  };

  return (
    <div className="home">
      <button onClick={handleClick} className="button-home">
        Ver cocteles
      </button>
    </div>
  );
};

export default Home;
