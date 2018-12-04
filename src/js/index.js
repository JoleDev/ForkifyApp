import axios from "axios";

// Global app controller


//API URL : https://www.food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20breast

async function getRecipe(searchQuery) {
    const key = "d92c6d78b1a77713feb40ee412b02dd7";
    try {
        const recipeSearch = await axios(`https://www.food2fork.com/api/search?key=${key}&q= ${searchQuery}`);
        const recipes = recipeSearch.data.recipes;
        console.log(recipes);
    } catch (error) {
        console.log (error);
    }
};

getRecipe("chicken%20breast");