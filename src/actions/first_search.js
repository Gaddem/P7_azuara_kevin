function fetchDataSearch(valueSearch) {
  tempoArray = [];
  let lowerCaseSearch = valueSearch.toLowerCase();
  tempoArray = recipes.filter(
    (detailRecipe) =>
      detailRecipe.name.toLowerCase().includes(lowerCaseSearch) ||
      detailRecipe.description.toLowerCase().includes(lowerCaseSearch) ||
      detailRecipe.ingredients.filter((ingr) =>
        ingr.ingredient.toLowerCase().includes(lowerCaseSearch)
      ).length > 0
  );
  return tempoArray;
}


const inputTop = document.getElementById("input_search");
//A l'ecoute d'entrée de valeurs sur l'input pour personnaliser l'affichage
inputTop.addEventListener("input", (e) => {
  if (e.target.value.length >= 3) {
    fetchDataSearch(e.target.value);
    init(tempoArray);
  } else {
    init(recipes);
  }
  display_data_list();
});
