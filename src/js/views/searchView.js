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
    elements.searchRecPages.innerHTML = "";
};

//Concatenate the title, If the title is too long for one line
const limitTitleLength = (title, limit = 17) => {
    const newTitle =  [];
    if (title.length > limit) {
        title.split (" ").reduce ((acc, ele) => {
            if (acc + ele.length <= limit) {
                newTitle.push (ele);
            }
            return acc + ele.length;
        },0);
        return `${newTitle.join (" ")} ...`;
    };
    return title
};

//We define a function, which insert the HTML markup for each recipe result.
const insertHtml = recipe => {
    const htmlMarkup = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitTitleLength (recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;
    elements.recipeHtmlList.insertAdjacentHTML ("beforeend", htmlMarkup);
}

const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === "prev" ? page-1 : page+1}>
        <span>Page ${type === "prev" ? page-1 : page+1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === "prev" ? "left" : "right"}"></use>
        </svg>
    </button>
`;

//Render the buttons for pagination
const renderButtons = (page, numReceipes, recPerPage) => {
    //Math.ceil will always rounding up the result to next integer.
    const pages = Math.ceil (numReceipes / recPerPage);
    let button;

    if (page === 1 && pages > 1) {
        //Only a button to next page
        button = createButton (page, "next");
    } else if (page < pages) {
        //Both buttons
        button = `
            ${createButton (page, "next")}
            ${createButton (page, "prev")}
        `;
    } else if (page === pages && pages > 1) {
        //Only a button to go to prev page
        button = createButton (page, "prev");
    }

    elements.searchRecPages.insertAdjacentHTML ("afterbegin", button);
};

//This function will recieve the recipies array and will loop through it
//This function will call insertHtml () which insert the HTML mark up on each element
export const renderRecipes = (recipe, page = 1, recPerPage = 10) => {
    //Render results of the current page
    const start = (page-1) * recPerPage;
    // In page 1 : (1-1) * 10 = 0
    // In page 2 : (2-1) * 10 = 10
    // In page 3 : (3-1) * 10 = 30

    const end = page * recPerPage;
    // In page 1 : 1 * 10 = 10
    // In page 2 : 2 * 10 = 20
    // In page 3 : 3 * 10 = 30

    //We can use slice method here
    recipe.slice (start, end).forEach(insertHtml);

    //Render pagination buttons
    renderButtons (page, recipe.length, recPerPage);
}