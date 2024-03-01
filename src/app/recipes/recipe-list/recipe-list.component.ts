import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'),
    new Recipe ('Different recipe', 'This is a different recipe', 'https://www.marthastewart.com/thmb/9SwNGFbxZv2ttLQ3uvZe_McJChk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-basic-pancakes-horiz-1022_0-f13ba897aba6423db7901ca826595244.jpgitokXQMZkp_j')
  ];

  constructor() { }
  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
