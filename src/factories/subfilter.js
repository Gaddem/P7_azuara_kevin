function childListeFactory(name,lengthAllChildren,parent) {
    //Création d'une card de recette
    function getChildCardDOM() {
      const card = document.createElement("div");
      let parentIsOpen = parent.getAttribute("data-parent") == "open" ?true:false;
      if(lengthAllChildren ==1){
        card.style.width="100%";
        parent.style.width = "auto";
      }else if(lengthAllChildren ==2){
        card.style.width="45%";
        parent.style.width = parentIsOpen?"33%":"auto";
      }else if(lengthAllChildren > 2){
        card.style.width="30%";
        parent.style.width = parentIsOpen?"40%":"auto";
      }else{
        parent.style.width = "auto";
        card.style.width="0";
      }
      card.style.display="flex";
      card.style.height="20px";
      card.style.justifyContent="flex-start";
      card.style.margin="10px";

      const nameChild = document.createElement("p");
      nameChild.style.color="white";
      nameChild.style.fontWeight="400";
      nameChild.textContent = name;

      card.appendChild(nameChild);  
      return card;
    }
    return { getChildCardDOM };
  }
  