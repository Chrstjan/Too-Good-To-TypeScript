var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const receivedRecipeData = (allRecipes) => __awaiter(void 0, void 0, void 0, function* () {
    let MealType;
    (function (MealType) {
        MealType["Dinner"] = "Dinner";
        MealType["Lunch"] = "Lunch";
        MealType["SideDish"] = "Side Dish";
        MealType["Appetizer"] = "Appetizer";
        MealType["Snacks"] = "Snack";
        MealType["Breakfast"] = "Breakfast";
        MealType["Beverage"] = "Beverage";
        MealType["Dessert"] = "Dessert";
    })(MealType || (MealType = {}));
    let dinnerArray = [];
    let lunchArray = [];
    let sideDishArray = [];
    let appetizerArray = [];
    let snacksArray = [];
    let breakfastArray = [];
    let beverageArray = [];
    let dessertArray = [];
    let miscArray = [];
    allRecipes.recipes.map((recipe) => {
        let mealTypeArray = recipe.mealType;
        mealTypeArray.forEach((mealType) => {
            const sortMealTypes = (mealType) => {
                switch (mealType) {
                    case MealType.Dinner:
                        dinnerArray.push(recipe);
                        break;
                    case MealType.Lunch:
                        lunchArray.push(recipe);
                        break;
                    case MealType.SideDish:
                        sideDishArray.push(recipe);
                        break;
                    case MealType.Appetizer:
                        appetizerArray.push(recipe);
                        break;
                    case MealType.Snacks:
                        snacksArray.push(recipe);
                        break;
                    case MealType.Breakfast:
                        breakfastArray.push(recipe);
                        break;
                    case MealType.Beverage:
                        beverageArray.push(recipe);
                        break;
                    case MealType.Dessert:
                        dessertArray.push(recipe);
                        break;
                    default:
                        miscArray.push(recipe);
                        break;
                }
            };
            sortMealTypes(mealType);
        });
    });
    console.log(dinnerArray);
    console.log(lunchArray);
    console.log(miscArray);
});
