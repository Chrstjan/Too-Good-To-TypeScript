import { pageNavigation } from "./Components/navigation.js";
import { getRecipes } from "./Components/Recipes/getRecipeData.js";
import { getSearchedRecipe } from "./Components/Searchbar/searchbar.js";
getRecipes();
getSearchedRecipe();
pageNavigation();
