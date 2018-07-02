import { Component, OnInit } from "@angular/core";

import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: "app-add-recepie-form",
  templateUrl: "./add-recepie-form.component.html",
  styleUrls: ["./add-recepie-form.component.css"]
})
export class AddRecepieFormComponent implements OnInit {
  numOfIngredients: number;
  timeDigit: number
  ingredients: string[];
  ingFormControl: number[];
  constructor() {}

  ngOnInit() {
      this.UIselects();

    //initialize ingredients
    this.ingredients = [];

    //ingredients form controller
    this.ingFormControl = [0];
  }

  addIngredientForm(e: any){
    e.preventDefault();
    let length = this.ingFormControl.length
    
    this.ingFormControl.push(this.ingFormControl[length] + 1);
  }

  minusIngredientForm(e: any, i){
    e.preventDefault();
    this.ingFormControl.splice(i, 1);
    this.ingredients.splice(i, 1);
  }

  newIngredient(e, i){
    let item = e.target.value;
    this.ingredients[i] = item;
  }
  minusHover(e){
    let instances = M.Tooltip.init(e.target, {position: "bottom", html: "Remove"});
  }

  addHover(e) {
    let instances = M.Tooltip.init(e.target, {position: "bottom", html: "Add Ingredient"});    
  }

  UIselects(){
    
      let elems = document.querySelectorAll("#difficulty");
      let instances = M.FormSelect.init(elems, {});
    

      let elems2 = document.querySelectorAll("#timeString");
      let instances2 = M.FormSelect.init(elems2, {});

  }
}
