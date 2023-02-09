function ToogleFilter(typeListe,action,word=""){
    let index=0;
    let arrayToAction =[];
    switch (typeListe) {
        case "filt_ingr":
                        arrayToAction = action=="add"?PushIn(selectedIngredient,word):GetOut(selectedIngredient,word)
                        index=1;
        break;
        case "filt_app": arrayToAction = action=="add"?PushIn(selectedAppareil,word):GetOut(selectedAppareil,word);
                        index=2;
        break;
        case "filt_ust": arrayToAction =  action=="add"?PushIn(selectedUstensil,word):GetOut(selectedUstensil,word);
                        index=3;
        break;
        default:
            break;
    }
    displaySubFiltersChoice();
    // fetchDataSort(recipes);
    // display_data_list(index,arrayToAction);
    
    return;
}

function PushIn(arrayToPush,word){
    arrayToPush.push(word.toLowerCase());
    // console.log(selectedIngredient);
    return arrayToPush;
}
function GetOut(arrayToSplice,word){
    let indexToDelete = arrayToSplice.indexOf(word.toLowerCase());
    arrayToSplice.splice(indexToDelete,1);
    displaySubFiltersChoice();
    return arrayToSplice;
}