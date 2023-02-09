function displaySubFiltersChoice () {
    const containerSubFilter = document.getElementById("filter_choice");
    containerSubFilter.innerHTML="";
    selectedIngredient.forEach(element => {
            const childModel = subFilterFactory(element,"element_blue",selectedIngredient);
            const childCardDOM = childModel.getChildsubFilterDOM();
            containerSubFilter.appendChild(childCardDOM);
    });
    
    selectedAppareil.forEach(element => {
        const childModel = subFilterFactory(element,"element_green",selectedAppareil);
        const childCardDOM = childModel.getChildsubFilterDOM();
        containerSubFilter.appendChild(childCardDOM);
    });
    
    selectedUstensil.forEach(element => {
        const childModel = subFilterFactory(element,"element_orange",selectedUstensil);
        const childCardDOM = childModel.getChildsubFilterDOM();
        containerSubFilter.appendChild(childCardDOM);
    });
}

