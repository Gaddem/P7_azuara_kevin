const filters_bottom = document.querySelectorAll(".card_filter_choice_bottom ");//Sélections des filtres
let listesFilter = Array.from(filters_bottom).map((filter)=>{ return Array.from(filter.children).filter(a=>a.className!="content-row");}).flat();

filters_bottom.forEach(filter => {//Boucle sur les filtres parent
    let childrenMainElement = Array.from(filter.children);
    childrenMainElement[0].addEventListener("click", function(e) {//A l'écoute de l'appui d'un des enfants
        e.stopPropagation();
        if(filter.getAttribute("data-parent")=="open" ){
            filter.setAttribute("data-parent","close");
            open_input_filter("",listesFilter);
        }else{
            filter.setAttribute("data-parent","open");
            open_input_filter(filter.getAttribute("data-name"),listesFilter);
        }
    });



    let childrenElements =Array.from(childrenMainElement[0].children);
    for (let i = 0; i < childrenElements.length; i++) {//Boucle sur les enfants du filtre parent
        childrenElements[i].addEventListener("click", function(e) {//A l'écoute de l'appui d'un des enfants
            e.stopPropagation();
            if(filter.getAttribute("data-parent")=="open" && childrenElements[i].tagName=="SPAN"){
                filter.setAttribute("data-parent","close");
                open_input_filter("",listesFilter);
            }else{
                filter.setAttribute("data-parent","open");
                open_input_filter(filter.getAttribute("data-name"),listesFilter);
            }
        });
    }
});

   
//fonction qui s'occupe des changements affectant les enfants d'un filtre en fonction d'une action d'ouverture/fermeture
function display_childrens_filter(
  childrenMain,
  displayAction,
  liste,
) {
  // console.log(childrenMain);
  let childrens = Array.from(childrenMain);
  childrens = childrens.map((chld) => Array.from(chld)).flat();
  let childrenTitle = childrens.filter((child) => child.tagName == "H3");
  let childrenInput = childrens.filter((child) => child.tagName == "INPUT");
  let childrenSpan = childrens.filter((child) => child.tagName == "SPAN");
  liste.forEach((element) => {
    element.style.display = displayAction == "open" ? "flex" : "none";
    element.style.paddingBottom = displayAction == "open" ? "10px" : 0;
    element.style.flexWrap = "wrap";
  });
  childrenTitle.forEach((title) => {
    title.style.display = displayAction == "open" ? "none" : "flex";
  });
  childrenInput.forEach((input) => {
    input.style.display = displayAction == "open" ? "flex" : "none";
    if (displayAction == "open") {
      input.focus();
    }
  });
  childrenSpan.forEach((span) => {
    span.style.transform =
      displayAction == "open" ? "rotate(180deg)" : "rotate(0deg)";
  });
  display_data_list();
}


function open_input_filter(typeOpen,liste){//Fonction principale d'ouverture et fermeture des filtres
   let filtres_to_close = Array.from(filters_bottom).filter(nodeElement => nodeElement.getAttribute("data-name") != typeOpen);//array des filtres non ouvert
   let listes_close =   filtres_to_close.map((listeToClose)=>{ return Array.from(listeToClose.children).filter(childFiltre=>childFiltre.className!="content-row")}).flat();//array de la liste à fermer
   let filtre_to_open = Array.from(filters_bottom).filter(nodeElement => nodeElement.getAttribute("data-name") == typeOpen);//array du filtre ouvert
   let liste_open =   filtre_to_open.map((listeToOpen)=>{ return Array.from(listeToOpen.children).filter(childFiltre=>childFiltre.className!="content-row")}).flat();//array de la liste à ouvrir

   
    filtres_to_close.forEach(filClose=> {
        filClose.style.width = "auto";
        
        filClose.style.borderBottomLeftRadius = "5px";
        filClose.style.borderBottomRightRadius = "5px";  
        let filCloseChildrens = Array.from(filClose.children).map(child => child.children);
        filClose.setAttribute("data-parent","close");
        display_childrens_filter(filCloseChildrens,"close",listes_close);
    });
    filtre_to_open.forEach(filOpen => {
        filOpen.boxSizing=" border-box";
        filOpen.style.borderBottomLeftRadius = 0;
        filOpen.style.borderBottomRightRadius = 0;
        let filOpenChildrens =  Array.from(filOpen.children).map(child => child.children);
        display_childrens_filter(filOpenChildrens,"open",liste_open);       
    });

}