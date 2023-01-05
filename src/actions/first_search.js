function fetchDataSearch(valueSearch){
    tempoArray=[];
    let lowerCaseSearch = valueSearch.toLowerCase();
    tempoArray = recipes.filter(detailRecipe => 
        detailRecipe.name.toLowerCase().includes(lowerCaseSearch) || 
        detailRecipe.description.toLowerCase().includes(lowerCaseSearch) ||
        detailRecipe.ingredients.filter(ingr=> ingr.ingredient.toLowerCase().includes(lowerCaseSearch)).length > 0
        ); 
}