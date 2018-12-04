import axios from "axios";

export default class Search {
    //In every javascript class we must define the constructor first with all the parameters
    constructor (query) {
        this.query = query;
    }
    //We can put ";" semi colon here, but it will ignored by the compiler
    //But if we put "," here, it will trow an error/

    async getRecipe() {
        const key = "d92c6d78b1a77713feb40ee412b02dd7";
        try {
            const recipeSearch = await axios(`https://www.food2fork.com/api/search?key=${key}&q= ${this.query}`);
            this.recipe = recipeSearch.data.recipes;
            console.log(this.recipe);
        } catch (error) {
            console.log (error);
        }
    }
};