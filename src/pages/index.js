
//while, for
 function displayRecipe(recipeArray){
    for (let index = 0; index < recipeArray.length; index++) {
        const recipe = recipeArray[index];
        const recipesSection = document.getElementById("container_cards");
        const recipeModel = recipeFactory(recipe);
        const recipeCardDOM = recipeModel.getRecipeCardDOM();
        recipesSection.appendChild(recipeCardDOM);
    }
}

 function init() {
    // Récupère les recettes et fait l'affichage initial
         displayRecipe(recipes);    
  }
  
  init();
  