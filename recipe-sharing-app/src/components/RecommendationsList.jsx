import React from 'react';
import { useRecipeStore } from '../store/recipeStore'; // ✅ make sure path is correct

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations); // ✅ useRecipeStore

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        recommendations.map(recipe => ( // ✅ map usage
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;