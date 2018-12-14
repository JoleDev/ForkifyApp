// Global app controller
import Search from "./model/Search";
import * as searchView from "./views/searchView";
import Recipe from "./model/Recipe";
import {
    elements,
    renderLoader,
    clearLoader
} from "./views/events";

/*
Global state of the app
*- Search object
*- Current recipe object
*- Shopping list object
*- Liked recipes
*/
const state = {};

/*
 ** SEARCH CONTROLLER
 */
const controlSearch = async () => {
    //1. Get the query from the view
    const query = searchView.getInput();

    if (query) {
        //2. Create new search object and added to state object
        state.search = new Search(query);

        //3. Prepare UI for results
        searchView.clearInput();
        searchView.clearRecipeList();
        renderLoader(elements.searchDiv);

        try {
            //4. Search for results
            //We have to wait before we render the results ion the UI, hence we have to make below function wait
            await state.search.getRecipe();

            //5. Render search results on UI
            clearLoader();
            searchView.renderRecipes(state.search.recipe);        
        } catch (error) {
            console.log (error);
            clearLoader();
        };
    };
};

//Event listner to handle the input query
elements.searchForm.addEventListener("submit", e => {
    //Prevent page reload on pressing the submit button
    e.preventDefault();
    controlSearch();
});

elements.searchRecPages.addEventListener("click", ele => {
    const btn = ele.target.closest(".btn-inline");
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearRecipeList();
        searchView.renderRecipes(state.search.recipe, goToPage)
    }
});

/*
 ** RECIPE CONTROLLER
 */
const controlRecipe = async () => {
    //1. Get ID from URL
    const id = window.location.hash.replace("#", "");

    if (id) {
        //2. Prepare UI for changes

        //3. Create new recipe object
        state.recipe = new Recipe(id);

        //TESTING
        window.r = state.recipe;

        try {
            //4. Get recipe data, Async function
            await state.recipe.getRecipe();
            state.recipe.parseIngredients ();

            //5. Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            //6. Render the recipe
            console.log(state);
        } catch (error) {
            console.log(error)
        };
    };
};

/*We can use one line of code to achive the same results of bellow two line code
window.addEventListener ("hashchange", controlRecipe);
window.addEventListener ("load", controlRecipe);
*/

["hashchange", "load"].forEach(event => window.addEventListener(event, controlRecipe));