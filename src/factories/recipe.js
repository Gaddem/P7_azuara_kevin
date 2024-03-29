function recipeFactory(data) {
  const {
    name,
    ingredients,
    time,
    description,
  } = data;

  //Création d'une card de recette
  function getRecipeCardDOM() {
    const card = document.createElement("div");
    card.classList.add("card_child");

    const darkTop = document.createElement("div");
    darkTop.classList.add("dark_section");
    const lightBot = document.createElement("div");
    lightBot.classList.add("desc_card_section");

    const topInLightBox = document.createElement("section");
    topInLightBox.classList.add("desc_card_top");
    const botInLightBox = document.createElement("div");
    botInLightBox.classList.add("desc_card_bot");

    const titleRecipe = document.createElement("h2");
    titleRecipe.textContent = name;
    titleRecipe.classList.add("title_receipe");
    const timingContainer = document.createElement("div");
    timingContainer.classList.add("container_timing");
    const iconClock = document.createElement("img");
    iconClock.setAttribute("src", "img/clock.png");
    iconClock.setAttribute("alt", "clock icon");
    const timing = document.createElement("h2");
    timing.textContent = time + " min";

    const ingredientList = document.createElement("div");
    ingredientList.classList.add("list_ingr");

    const descRecipeConatiner = document.createElement("div");
    descRecipeConatiner.classList.add("recipe");
    const descRecipe = document.createElement("p");
    descRecipe.textContent = description;

    botInLightBox.appendChild(ingredientList);
    fetch_quantity(ingredients, ingredientList);
    descRecipeConatiner.appendChild(descRecipe);
    botInLightBox.appendChild(descRecipeConatiner);

    topInLightBox.appendChild(titleRecipe);
    timingContainer.appendChild(iconClock);
    timingContainer.appendChild(timing);
    topInLightBox.appendChild(timingContainer);

    lightBot.appendChild(topInLightBox);
    lightBot.appendChild(botInLightBox);

    card.appendChild(darkTop);
    card.appendChild(lightBot);
    return card;
  }
  return { getRecipeCardDOM };
}
