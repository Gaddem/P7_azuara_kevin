let ingred = ["Lait de coco","Jus de citron","Crème de coco","Sucre"];
let appareil = ["Lait de coco","Jus de citron"];
let ustens = ["Lait de coco"];
const allList = Array.from(document.querySelectorAll(".list-select")).map((liste)=>{
    return {"type":liste.parentNode.getAttribute("data-name") ,"liste":liste,"parent":liste.parentNode}
});

function display_data_list(){
    allList.forEach((dataToDisplay) => {
        dataToDisplay.liste.innerHTML = ``;
        let data_liste =[];
        switch (dataToDisplay.type) {
            case "filt_ingr":data_liste= ingred;
            break;
            case "filt_app":data_liste= appareil;
            break;
            case "filt_ust":data_liste= ustens;
            break;
            default:
                break;
        }
        data_liste.forEach((child) => { 
          const childModel = childListeFactory(child,data_liste.length,dataToDisplay.parent);
          const childCardDOM = childModel.getChildCardDOM();
          dataToDisplay.liste.appendChild(childCardDOM);
        });
    });
}

display_data_list();