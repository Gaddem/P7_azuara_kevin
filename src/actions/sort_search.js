function fetchDataSort(arrayToFilter) {
   let sortIngr =  selectedIngredient?.length<1 ? arrayToFilter : arrayToFilter.filter((recipe)=>{
        let NameIngredients=recipe.ingredients.map((ingr)=>{return ingr.ingredient});
        let foundIngredientsToFiltre = NameIngredients.some(r=> selectedIngredient.indexOf(r) >= 0);
        if(foundIngredientsToFiltre===true){
            return recipe;
        }   
   }).map((recipe)=>{
    return recipe;
   });

   let sortAppareil=  selectedAppareil?.length<1 ? sortIngr : sortIngr.filter((recipe)=>{
    if(selectedAppareil.includes(recipe.appliance)){
        return recipe;
    }  
    }).map((recipe)=>{
    return recipe;
    });

    let sortUstensils =  selectedUstensil?.length<1 ? sortAppareil : sortAppareil.filter((recipe)=>{
        let foundUstensilsToFiltre = recipe.ustensils.some(r=> selectedUstensil.indexOf(r) >= 0);
        if(foundUstensilsToFiltre===true){
            return recipe;
        }   
    }).map((recipe)=>{
        return recipe;
    });

   
    return sortUstensils;
  }