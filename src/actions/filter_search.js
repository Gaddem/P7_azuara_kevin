const allInputFilter= Array.from(document.querySelectorAll(".input_in_filter")).map((input)=>{
    return {"type":input.parentNode.parentNode.getAttribute("data-name"),"input":input,"parent":input.parentNode.parentNode}
});

const testAllFilterInput = document.querySelectorAll(".input_in_filter");
testAllFilterInput.forEach(input => {
    input.addEventListener("input", (e) => {
        console.log(e.target.parentNode.parentNode.getAttribute("data-name"));
        if(e.target.value?.length == 0){
            display_data_list()
        }else{
            let index=0;
            let arraySearch=[];
            let valueInInput = e.target.value.toLowerCase();
            switch (e.target.parentNode.parentNode.getAttribute("data-name")) {
                    case "filt_ingr":
                        index=1;
                        arraySearch=arrayIngredientDisplay.filter(ingredient => ingredient.toLowerCase().indexOf(valueInInput) > -1);
                    break;
                    case "filt_app":
                        index=2;
                        arraySearch=arrayAppareilDisplay.filter(appareil => appareil.toLowerCase().indexOf(valueInInput) > -1);
    
                    
                    break;
                    case "filt_ust":
                        index=3;
                        arraySearch=arrayUstensilDisplay.filter(ustensil => ustensil.toLowerCase().indexOf(valueInInput) > -1);
    
                    
                    break;
                default:
                    break;
            }
            display_data_list(index,arraySearch)
        }
       
        
    })
});
