function ToogleFilter(typeListe,word=""){//Action d'appui sur un filtre depuis la liste de sélection
    let index=0;
    let arrayToAction =[];
    switch (typeListe) {
        case "filt_ingr":
                        arrayToAction = PushIn(selectedIngredient,word)
                        index=1;
        break;
        case "filt_app": arrayToAction = PushIn(selectedAppareil,word);
                        index=2;
        break;
        case "filt_ust": arrayToAction = PushIn(selectedUstensil,word);
                        index=3;
        break;
        default:
            break;
    }
    initDisplay()
    return;
}

function PushIn(arrayToPush,word){
    arrayToPush.push(word.toLowerCase());
    return arrayToPush;
}
function GetOut(arrayToSplice,word){
    let indexToDelete = arrayToSplice.indexOf(word.toLowerCase());
    arrayToSplice.splice(indexToDelete,1);
    initDisplay()
    return arrayToSplice;
}

function initDisplay(){
    init();
    display_data_list();
    displaySubFiltersChoice();
}