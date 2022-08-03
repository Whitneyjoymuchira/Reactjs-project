import { useState, useEffect } from "react";
import axios from "axios";
import "./Recipes.js"
import React from "react";
import Recipes from "./Recipes.js";
export default function Recipeitems() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const response = await axios.get(
      "https://boiling-hollows-58510.herokuapp.com/recipe"
    );
    setRecipes(response.data);
  };
  useEffect(() => {
    (async () => {
      setLoading(true);
      fetchData();
      setLoading(false);
    })();
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {recipes.map((recipe) => (
            <Recipes key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
