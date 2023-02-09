function checkerEveryIncludes (arrayToTest, stableArray){
    return stableArray.every(v => arrayToTest.includes(v))
};

function fetchDataSort(arrayToFilter) {
   let sortIngr =  selectedIngredient?.length<1 ? arrayToFilter : arrayToFilter.filter((recipe)=>{
        let NameIngredients=recipe.ingredients.map((ingr)=>{return ingr.ingredient.toLowerCase()});
        
        let foundIngredientsToFiltre = NameIngredients.some(r=> selectedIngredient.indexOf(r) >= 0);
        let reCheck = checkerEveryIncludes(NameIngredients,selectedIngredient);
        console.log("NameIngredients",NameIngredients,"selectedIngredient",selectedIngredient, " == ",reCheck);
        if(foundIngredientsToFiltre===true && reCheck === true){
            return recipe;
        }   
   }).map((recipe)=>{
    return recipe;
   });
//    console.log(sortIngr);
   let sortAppareil=  selectedAppareil?.length<1 ? sortIngr : sortIngr.filter((recipe)=>{
    if(selectedAppareil.includes(recipe.appliance.toLowerCase())){
        return recipe;
    }  
    }).map((recipe)=>{
    return recipe;
    });

    let sortUstensils =  selectedUstensil?.length<1 ? sortAppareil : sortAppareil.filter((recipe)=>{
        let foundUstensilsToFiltre = recipe.ustensils.map(v => v?.toLowerCase()).some(r=> selectedUstensil.indexOf(r) >= 0);
        if(foundUstensilsToFiltre===true){
            return recipe;
        }   
    }).map((recipe)=>{
        return recipe;
    });

   
    return sortUstensils;
  }