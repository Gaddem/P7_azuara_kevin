function fetchDataSearch(valueSearch) {
  //fonction qui permet de filtrer en fonction d'une valeur de recherche
  tempoArray = [];
  let lowerCaseSearch = valueSearch.toLowerCase();
  for (let index = 0; index < recipes.length; index++) {
    const recipe = recipes[index];
    let lowerCaseNameRecipe = recipe.name.toLowerCase();
    let lowerCaseDescRecipe = recipe.description.toLowerCase();
    if (lowerCaseNameRecipe.includes(lowerCaseSearch)) {
      //condition sur le titre de la recette
      tempoArray.push(recipe);
    } else if (lowerCaseDescRecipe.includes(lowerCaseSearch)) {
      //condition surla description de la recette
      tempoArray.push(recipe);
    } else {
      //condition sur la liste des ingrédients de la recette
      for (
        let indexIngr = 0;
        indexIngr < recipe.ingredients.length;
        indexIngr++
      ) {
        const ingr = recipe.ingredients[indexIngr];
        let lowerCaseNameIngr = ingr.ingredient.toLowerCase();
        if (lowerCaseNameIngr.includes(lowerCaseSearch)) {
          tempoArray.push(recipe);
        }
      }
    }
  }
  return;
}
