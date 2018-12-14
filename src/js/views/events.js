export const elements = {
    searchForm : document.querySelector (".search"),
    searchInput : document.querySelector (".search__field"),
    searchDiv: document.querySelector (".results"),
    recipeHtmlList : document.querySelector (".results__list"),
    searchRecPages : document.querySelector (".results__pages"),
    recipe : document.querySelector (".recipe")
};

export const classNames = {
    loader: "loader",
};

export const renderLoader = (parentEle => {
    const loader = `
        <div class="${classNames.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parentEle.insertAdjacentHTML ("afterbegin", loader);
});

export const clearLoader = () => {
    const loader = document.querySelector (`.${classNames.loader}`);
    if (loader) {
        loader.parentElement.removeChild (loader);
    };
};