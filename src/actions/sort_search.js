function checkerEveryIncludes (arrayToTest, stableArray){
    return stableArray.every(v => arrayToTest.includes(v))
};

function fetchDataSort(arrayToFilter) {
   let sortIngr =  selectedIngredient?.length<1 ? arrayToFilter : arrayToFilter.filter((recipe)=>{
        let NameIngredients=recipe.ingredients.map((ingr)=>{return ingr.ingredient.toLowerCase()});
        let reCheck = checkerEveryIncludes(NameIngredients,selectedIngredient);
        if(reCheck === true){
            return recipe;
        }   
   }).map((recipe)=>{
    return recipe;
   });

   let sortAppareil=  selectedAppareil?.length<1 ? sortIngr : sortIngr.filter((recipe)=>{
    if(selectedAppareil.includes(recipe.appliance.toLowerCase())){
        return recipe;
    }  
    }).map((recipe)=>{
    return recipe;
    });

    let sortUstensils =  selectedUstensil?.length<1 ? sortAppareil : sortAppareil.filter((recipe)=>{
        let foundUstensilsToFiltre = recipe.ustensils.map(v => v?.toLowerCase());
        let resultCheck = checkerEveryIncludes(foundUstensilsToFiltre,selectedUstensil);
        if(resultCheck===true ){
            return recipe;
        }   
    }).map((recipe)=>{
        return recipe;
    });

   
    return sortUstensils;
  }