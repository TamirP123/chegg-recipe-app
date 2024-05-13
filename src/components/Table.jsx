import React, { useState } from "react";


function Table({recipes, deleteRecipe}) {

  
  return (
    <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cuisine</th>
              <th>Photo</th>
              <th>Ingredients</th>
              <th>Preparation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe, index) => (
              <tr key={index}>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td><img src={recipe.photo} alt="Recipe" style={{ width: '200px', height: '60px' }} /></td>
                <td>{recipe.ingredients}</td>
                <td>{recipe.preparation}</td>
                <td><button onClick={() => deleteRecipe(index)} name="delete">Delete</button></td>
              </tr>
              ))}
            
          </tbody>
        </table>
  );
}

export default Table;
