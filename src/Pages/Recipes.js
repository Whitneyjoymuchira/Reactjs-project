import React from "react";
import "/home/whitney/Development/code/phase-2/project/src/Pages/meals.css";

const Recipes = ({ recipe }) => {
  return (
    <div className="recipe">
      <h3>{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.name} />
      <div className="description">
        <p>{recipe.ingredients}</p>
        <p>{recipe.directions}</p>
      </div>
    </div>
  );
};

export default Recipes;
