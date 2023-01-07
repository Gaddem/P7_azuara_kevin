async function fetch_quantity(arrayElements,placeHTML){
    let html_response=``;
    arrayElements.forEach(elementIngr => {
        html_response+= `<p><strong class="title_ingr">${elementIngr.ingredient}${elementIngr?.quantity?`: </strong>`+elementIngr?.quantity:`</strong>`} ${elementIngr?.unit?elementIngr?.unit:``}</p></br>`;
    });
    placeHTML.innerHTML  = html_response;
}