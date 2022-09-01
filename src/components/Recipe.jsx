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
  const [recipeInfo, setRecipeInfo] = useState({});
  const [activeTab, setActiveTab] = useState(`instructions`);

  let params = useParams();

  async function getRecipe() {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information/?apiKey=${process.env.REACT_APP_API_KEY}`,
      { mode: `cors` }
    );
    const data = await response.json();
    setRecipeInfo(data);
    console.log(data);
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
      <LeftPanel>
        <p>{recipeInfo.title}</p>

        <img src={recipeInfo.image} alt={recipeInfo.title} />

        <Properties>
          {recipeInfo.diets &&
            recipeInfo.diets.map((diet) => {
              return <p>{diet}</p>;
            })}
        </Properties>

        <h4>Summary:</h4>
        <p dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}></p>
      </LeftPanel>

      <RightPanel>
        <Buttons>
          <button
            className={activeTab === `instructions` ? `active` : ``}
            onClick={() => makeInstructionsActive()}
          >
            Instructions
          </button>

          <button
            className={activeTab === `ingredients` ? `active` : ``}
            onClick={() => makeIngredientsActive()}
          >
            Ingredients
          </button>

          <Body>
            {activeTab === `instructions` ? (
              <p
                dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
              ></p>
            ) : (
              <>
                {recipeInfo.extendedIngredients &&
                  recipeInfo.extendedIngredients.map((ingredient) => {
                    return <p>{ingredient}</p>;
                  })}
              </>
            )}
          </Body>
        </Buttons>
      </RightPanel>
    </RecipeContainer>
  );
}

export default Recipe;
