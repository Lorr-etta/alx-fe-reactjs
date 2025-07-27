import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; //  required import

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes);

  if (recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {/*  Make each recipe clickable */}
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;