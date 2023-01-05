
//while, for
 function displayRecipe(recipeArray){//Affichage des recettes en fonction d'un tableau qui les contient
    const recipesSection = document.getElementById("container_cards");
    recipesSection.innerHTML=``;
    recipeArray.forEach(recipe => {
        const recipeModel = recipeFactory(recipe);
        const recipeCardDOM = recipeModel.getRecipeCardDOM();
        recipesSection.appendChild(recipeCardDOM);
    });
}
const inputTop = document.getElementById("input_search");
//A l'ecoute d'entrée de valeurs sur l'input pour personnaliser l'affichage
inputTop.addEventListener('input',(e)=>{
    if(e.target.value.length >=3){
        fetchDataSearch(e.target.value);
        init(tempoArray);
    }else{
        init(recipes);
    }
})

 function init(diffrentArray) {
        // Récupère les recettes et fait l'affichage initial
         displayRecipe(diffrentArray?diffrentArray:recipes);    
  }
  
  init();
  