### Todo List


##### 1.  Write an async function to get the recipe details based on search query in Search.js
    *   Added the Search class in Search.js file with query argument
    *   Define the getRecipe () method to retrive recipes from API, axios is used to make the api call
    *   Export the class and initialize a new Search object with search query argument


##### 2.  Define the state object in app controller (index.js) file
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