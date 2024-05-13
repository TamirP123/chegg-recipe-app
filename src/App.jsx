import React, { useState } from "react";
import RecipeCreate from "./components/RecipeCreate";
import RecipeList from "./components/RecipeList.jsx";
import RecipeData from "./components/RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };
  
  const deleteRecipe = (index) => {
    setRecipes(recipes.filter((_, i) => i !== index));
  };

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
