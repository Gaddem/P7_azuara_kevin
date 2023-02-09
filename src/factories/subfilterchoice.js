function subFilterFactory(name,classBackground,arrayToSplice) {
    //Création d'un filtre sélectionné
    function getChildsubFilterDOM() {
      const card = document.createElement("div");
         card.className =`card_filter_choice_top card_filter_choice ${classBackground}`;
      const isTitle = document.createElement("h4");
        isTitle.textContent = name;
      const containerClose = document.createElement("span");
        containerClose.className ="container_close";
      const iconClose = document.createElement("img");
        iconClose.src="img/close.png";
        iconClose.onclick = function(){
            GetOut(arrayToSplice,name);
        } ;
      containerClose.appendChild(iconClose);
      card.appendChild(isTitle);
      card.appendChild(containerClose);
      return card;
    }
    return { getChildsubFilterDOM };
  }
  