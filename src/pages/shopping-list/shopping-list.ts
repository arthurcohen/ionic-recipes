import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ShoppingListService } from '../../services/shopping-list';
import { Ingredient } from '../../models/ingredient';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  private currIngredients: Ingredient[] = []

  private test: Ingredient = new Ingredient('test',1)
  constructor(
    private shoppingListService: ShoppingListService
  ){}

  private onAddItem(form: NgForm){
    let i: Ingredient = new Ingredient(form.value.name, form.value.amount)
    this.shoppingListService.addIngredient(i);
    console.log(this.shoppingListService.getAllIngredients());
    form.reset();
    this.reloadIngredients();
  }

  private onDeleteIngredient(ingredient: Ingredient){
    this.shoppingListService.removeIngredient(ingredient)
    this.reloadIngredients();
  }

  ionWillEnter(){
    this.reloadIngredients();
  }

  private reloadIngredients(){
    this.currIngredients = this.shoppingListService.getAllIngredients();
  }
}
