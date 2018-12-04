### Todo List


##### 1.  Write an async function to get the recipe details based on search query
    *   Added the Search class in Search.js file
    *   Define the getRecipe () method to retrive recipes from API
    *   Export the class and initialize a new Search object with search query argument


##### 2.  Define the state object in app controller (index.js) file
    * All data relating to serach result object
    * All data relating to recipe object
    * Shopping list object data
    * Liked recipes object data

    This will help us to access all data from a single object anywhere in the app.

##### 3. Add event listener to take the input from search field
    * "submit" event added with a callback function to control the search

##### 4. controlSearch call back function for above event listner
    * Get the query from the view
    * Create new search object and added to state object
    * Prepare UI for results
    * Search for results
    * Render search results on UI