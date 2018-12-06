import {
    elements
} from "./events";

export const getInput = () => elements.searchInput.value;
//In Arrow function, if there is only one line of code, No need to specify return key word, it will be implicitly return.

//Clear input field
//Since we are not returning anything from this function it is cleaner to rap this code within parantheses
export const clearInput = () => {
    elements.searchInput.value = "";
}

//Clear the recipe list element, Otherwise, new search results will be added to existing list of elements
export const clearRecipeList = () => {
    elements.recipeHtmlList.innerHTML = "";
};

//We define a function, which insert the HTML markup for each recipe result.
const insertHtml = recipe => {
    const htmlMarkup = `
    <li>
        <a class="results__link results__link--active" href="${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}/p>
            </div>
        </a>
    </li>
    `;
    elements.recipeHtmlList.insertAdjacentHTML ("beforeend", htmlMarkup);
}


//This function will recipe the recipies array and will loop through it
//This function will call insertHtml () which insert HTML mark up on each element
export const renderRecipes = recipe => {
    recipe.forEach(insertHtml);
}