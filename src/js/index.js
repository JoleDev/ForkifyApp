// Global app controller
import Search from "./model/Search"

/*
Global state of the app
*- Search object
*- Current recipe object
*- Shopping list object
*- Liked recipes
*/
const state = {};

const controlSearch = async () => {
    //1. Get the query from the view
    const query = "pizza"; //TODO, We will add the query in searchView file
    
    if (query) {
        //2. Create new search object and added to state object
        state.search = new Search (query);
        //3. Prepare UI for results

        //4. Search for results
        //We have to wait before we render the results ion the UI, hence we have to make below function wait
        await state.search.getRecipe ();

        //5. Render search results on UI
        console.log (state.search.recipe);
    }
};

//Event listner to handle the input query
document.querySelector (".search").addEventListener ("submit", e => {
    //Prevent page reload on pressing the submit button
    e.preventDefault ();
    controlSearch ();
});





