async function fetch_quantity(arrayElements,placeHTML){
    let html_response=``;
    for (let indexIngr = 0; indexIngr < arrayElements.length; indexIngr++) {
        const elementIngr = arrayElements[indexIngr];
        html_response+= `<p><strong class="title_ingr">${elementIngr.ingredient}${elementIngr?.quantity?`: </strong>`+elementIngr?.quantity:`</strong>`} ${elementIngr?.unit?elementIngr?.unit:``}</p></br>`;        
    }
    placeHTML.innerHTML  = html_response

}