// Global app controller
import Search from "./model/Search"

const search = new Search ("pizza");
console.log (search);
//Event listner to handle the input query
document.querySelector (".search").addEventListener ("submit", e => {
    //Prevent page reload on pressing the submit button
    e.preventDefault ();
    controlSearch ();
});

search.getRecipe ();


