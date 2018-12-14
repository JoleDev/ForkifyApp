import axios from "axios";
import { key} from "../config";

export default class Recipe {
    //Constructor
    constructor (id) {
        this.id = id;
    }

    async getRecipe () {
        try {
            const recipe = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = recipe.data.recipe.title;
            this.author = recipe.data.recipe.publisher;
            this.image = recipe.data.recipe.image_url;
            this.url = recipe.data.recipe.source_url;
            this.ingredients = recipe.data.recipe.ingredients;
        } catch (error) {
            console.log (error);
        }   
    }

    calcTime () {
        const numIngrd = this.ingredients.length;
        const periods = Math.ceil (numIngrd / 3);
        this.time = periods * 15; 
    }

    calcServings () {
        this.servings = 4;
    }
};