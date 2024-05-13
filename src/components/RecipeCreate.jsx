import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  });
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
 const submitHandler = (e) => {
    e.preventDefault();
    const newRecipe = {
      ingredients: formData.ingredients,
      preparation: formData.preparation,
      name: formData.name,
      cuisine: formData.cuisine,
      photo: formData.photo
    };
    addRecipe(newRecipe);
    setFormData({
      ingredients: '',
      preparation: '',
      name: '',
      cuisine: '',
      photo: ''
    });
  };
  
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
          role="textbox"
          name="name" 
          type="text" 
          placeholder="Name"
                onChange={handleChange}
        />
            </td>
            <td>
              <input
          role="textbox"
          name="cuisine" 
          type="text" 
          placeholder="Cuisine"
                onChange={handleChange}
        />
            </td>
            <td>
             <input
          role="textbox"
          name="photo" 
          type="url"  
          placeholder="Enter URL..."
               onChange={handleChange}
        />
            </td>
            <td>
              <textarea
          role="textbox"
          name="ingredients" 
          placeholder="Ingredients"
                onChange={handleChange}
        />
            </td>
            <td>
              <textarea
          role="textbox"
          name="preparation" 
          placeholder="Preparation"
                onChange={handleChange}
        />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
