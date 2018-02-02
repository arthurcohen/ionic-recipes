import { Ingredient } from "../models/ingredient";


export class ShoppingListService{
    private ingredients: Ingredient[] = [];

    public addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient)
    }

    public removeIngredient(ingredient: Ingredient){
        let index = this.ingredients.findIndex(i => {
            return i == ingredient
        });
        this.ingredients.splice(index,1)
    }

    public getAllIngredients(){
        return this.ingredients.slice();
    }
}
