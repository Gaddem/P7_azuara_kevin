function displayRecipe(recipeArray) {
  //Affichage des recettes en fonction d'un tableau qui les contient
  const recipesSection = document.getElementById("container_cards");
  recipesSection.innerHTML = ``;
  recipeArray.forEach((recipe) => {
    const recipeModel = recipeFactory(recipe);
    const recipeCardDOM = recipeModel.getRecipeCardDOM();
    recipesSection.appendChild(recipeCardDOM);
  });
}

function Unification(array){//Permet de supprimer les éléments dupliqués d'un tableau et retourne un tableau avec des valeurs uniques
  array = array.map(v => v?.toLowerCase()).filter((item, i, ar) => ar.indexOf(item) === i);
  array = array.map((newElement)=>{ return newElement.charAt(0).toUpperCase()+ newElement.substr(1);});
  return array;
}

function init(diffrentArray) {
  // Récupère les recettes et fait l'affichage initial
  let arrayData= diffrentArray ? diffrentArray : recipes;

  //On filtre le tableau de recette avec les options de filtre qui ont été séléctionnés
  arrayData = fetchDataSort(arrayData);
  //On initialise les tableaux qui contiendront les filtres a afficher dnas les listes
  arrayIngredientDisplay=[];
  arrayAppareilDisplay=[];
  arrayUstensilDisplay=[];

  arrayData.forEach(recette => {
    arrayIngredientDisplay = arrayIngredientDisplay.concat(recette.ingredients.map(ingr=>ingr.ingredient));//On récupère la tableau de nom d'ingrédients à afficher dans la liste du filtre
    arrayAppareilDisplay.push(recette.appliance);//On push dans le tableau d'appareils à afficher dans la liste du filtre
    arrayUstensilDisplay = arrayUstensilDisplay.concat(recette.ustensils);//On récupère un tableau d'ustensils à afficher dans la liste du filtre
  });
  arrayIngredientDisplay = Unification(arrayIngredientDisplay);
  arrayAppareilDisplay = Unification(arrayAppareilDisplay);
  arrayUstensilDisplay = Unification(arrayUstensilDisplay);
  //On affiche les recettes
  displayRecipe(arrayData);
}

init();
