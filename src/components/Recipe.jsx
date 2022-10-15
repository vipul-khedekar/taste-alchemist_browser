import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  RecipeContainer,
  LeftPanel,
  RightPanel,
  Properties,
  Buttons,
  Body,
} from "../styles/StyledRecipe";

function Recipe() {
  let params = useParams();

  const [recipeInfo, setRecipeInfo] = useState({});
  const [activeTab, setActiveTab] = useState(`ingredients`);

  async function getRecipe() {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information/?apiKey=${process.env.REACT_APP_API_KEY}`,
      { mode: `cors` }
    );
    const data = await response.json();
    setRecipeInfo(data);
  }

  function makeInstructionsActive() {
    setActiveTab(`instructions`);
  }

  function makeIngredientsActive() {
    setActiveTab(`ingredients`);
  }

  useEffect(() => {
    getRecipe();
  }, [params.id]);

  return (
    <RecipeContainer>
      <LeftPanel
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h3>{recipeInfo.title}</h3>

        <img src={recipeInfo.image} alt={recipeInfo.title} />

        <Properties>
          {recipeInfo.diets &&
            recipeInfo.diets.map((diet) => {
              return <p>{diet}</p>;
            })}
        </Properties>

        <h4>Summary:</h4>
        <span dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}></span>
      </LeftPanel>

      <RightPanel
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Buttons>
          <button
            className={activeTab === `ingredients` ? `active` : ``}
            onClick={() => makeIngredientsActive()}
          >
            Ingredients
          </button>

          <button
            className={activeTab === `instructions` ? `active` : ``}
            onClick={() => makeInstructionsActive()}
          >
            Instructions
          </button>
        </Buttons>

        <Body>
          {activeTab === `ingredients` ? (
            <ul>
              {recipeInfo.extendedIngredients &&
                recipeInfo.extendedIngredients.map((ingredient) => {
                  return <li key={ingredient.id}>{ingredient.original}</li>;
                })}
            </ul>
          ) : (
            <p
              dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
            ></p>
          )}
        </Body>
      </RightPanel>
    </RecipeContainer>
  );
}

export default Recipe;
