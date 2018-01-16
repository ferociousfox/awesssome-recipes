import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Recipes</h1>
    </div>
    <div *ngFor="let currentRecipe of recipes"><div class="recipe"><h3>{{currentRecipe.title}}</h3><p>Ingredients:<li> {{currentRecipe.ingredients}}</li></p><p>Instructions:<li> {{currentRecipe.instructions}}</li></p></div></div>

  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Boiled Water', 'Water', 'Boil it'),
    new Recipe('Toast', 'Bread', 'Toast it'),
    new Recipe('Hard Boiled Egg', 'Raw eggs, pan of water', 'Boil the eggs in the pan of water')
  ]

}

export class Recipe {
  constructor(public title: string, public ingredients: string, public instructions: string) { }
}
