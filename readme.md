# To-do List

## 1.  Write an async function to get the recipe details based on search query in Search.js

    *   Added the Search class in Search.js file with query argument
    *   Define the getRecipe () method to retrive recipes from API, axios is used to make the api call
    *   Export the class and initialize a new Search object with search query argument


## 2.  Define the state object in app controller (index.js) file

    * All data relating to serach result object
    * All data relating to recipe object
    * Shopping list object data
    * Liked recipes object data

    This will help us to access all data from a single object anywhere in the app.

##### 3. Add event listener to take the input from search field

    * "submit" event added with a callback function to get the input and pass it to controlSearch () function

##### 4. controlSearch () call back function added in index.js

    * Get the query from the view
    * Create new search object and added to state object
    * Prepare UI for results
    * Search for results
    * Render search results on UI

##### 5. Created event.js file

    * One object is created to save all the HTML DOM Elements

##### 6. Defining the searchView.js functionality

    * Function was defined to save the search query input
    * Function was defined to
        * Create the HTML markup (list) and pass recipe object results - Recipe ID, Recipe Title, Recipe Publisher, Recipe Image
        * insert the HTML markup to DOM, using insertAdjacentHTML
    * forEach function was define to loop through the recipes Array and add above html list markup for each recipe result.

##### 7. Clear input field and recipe list

    * Clear search input field once user press the search button
    * Clear the existing list of recipes from the view

##### 8. Concatenate the title

    * Concatenate the title, If the title is too long for one line

##### 9. Adding the loader button

    * Until it fulfil the API request, loader icon will appear in the search view

##### 10. Add the pagination function

    * Add pagination function to show ten results at a time
    * Add buttons dynamically to navigate between recipe results

##### 11. Building the recipe model

    * Define the recipe class data model
    * Add ajax function to get recipe from API
    * Define calculate time and no of servings methods

##### 12. Building the recipe model - Part 2

    * Develop the parseIngredients () to parse the ingredients string and take quantity, unit and ingredients separatly into three different variables and store it in a single object.