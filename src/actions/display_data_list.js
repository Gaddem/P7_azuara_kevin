const allList = Array.from(document.querySelectorAll(".list-select")).map((liste)=>{
    return {"type":liste.parentNode.getAttribute("data-name") ,"liste":liste,"parent":liste.parentNode}
});

function display_data_list(indexSearch,arraySearch){
    allList.forEach((dataToDisplay) => {
        dataToDisplay.liste.innerHTML = ``;
        let data_liste =[];
        switch (dataToDisplay.type) {
            case "filt_ingr":data_liste= indexSearch==1 && arraySearch? Unification(arraySearch) : Unification(arrayIngredientDisplay);
                            data_liste = data_liste.map(v => v?.toLowerCase()).map((ingr)=>{if(!selectedIngredient.includes(ingr)){return ingr}})
            break;
            case "filt_app":data_liste= indexSearch==2 && arraySearch? Unification(arraySearch) : Unification(arrayAppareilDisplay);
                            data_liste = data_liste.map(v => v?.toLowerCase()).map((app)=>{if(!selectedIngredient.includes(app)){return app}})
            break;
            case "filt_ust":data_liste= indexSearch==3 && arraySearch? Unification(arraySearch) : Unification(arrayUstensilDisplay);
                            data_liste = data_liste.map(v => v?.toLowerCase()).map((ust)=>{if(!selectedIngredient.includes(ust)){return ust}})

            break;
            default:data_liste=[];
                break;
        }
        data_liste.forEach((child) => { 
          const childModel = childListeFactory(child,data_liste.length,dataToDisplay.parent,dataToDisplay.type);
          const childCardDOM = childModel.getChildCardDOM();
          dataToDisplay.liste.appendChild(childCardDOM);
        });
    });
}

