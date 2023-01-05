
//while, for
 function displayRecipe(recipeArray){
    const recipesSection = document.getElementById("container_cards");
    recipesSection.innerHTML=``;
    for (let index = 0; index < recipeArray.length; index++) {
        const recipe = recipeArray[index];
        const recipeModel = recipeFactory(recipe);
        const recipeCardDOM = recipeModel.getRecipeCardDOM();
        recipesSection.appendChild(recipeCardDOM);
    }
}
const inputTop = document.getElementById("input_search");
inputTop.addEventListener('input',(e)=>{
    if(e.target.value.length >=3){
        console.log("Il y a au moins 3 caractères");
        fetchDataSearch(e.target.value);
        init(tempoArray);
    }else{
        init(recipes)
    }
})

 function init(diffrentArray) {

    // Récupère les recettes et fait l'affichage initial
         displayRecipe(diffrentArray?diffrentArray:recipes);    
  }
  addEventListener
  
  init();
  