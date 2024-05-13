import React, { useState } from "react";
import Table from "./Table.jsx"

function RecipeList({recipes, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  return (
    <div className="recipe-list">
          <Table recipes={recipes} deleteRecipe={deleteRecipe}/>

    </div>
  );
}

export default RecipeList;
