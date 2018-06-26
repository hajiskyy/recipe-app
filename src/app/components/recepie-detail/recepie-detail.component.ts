import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";

import * as M from "materialize-css/dist/js/materialize";

import { RecepiesService } from "../../services/recepies.service";
import { StepsService } from 
"../../services/steps.service";

import { of } from 'rxjs';



@Component({
  selector: "app-recepie-detail",
  templateUrl: "./recepie-detail.component.html",
  styleUrls: ["./recepie-detail.component.css"]
})
export class RecepieDetailComponent implements OnInit {
  recepie: any;
  steps$: any[]
  ingredients: any[];
  recepieId: string;
  constructor(
    private active: ActivatedRoute,
    private router: Router,
    private recepieService: RecepiesService,
    private stepsService: StepsService
  ) {}

  ngOnInit() {
    this.recepieId = this.active.snapshot.paramMap.get("id");
    this.recepieService.getSingleRecepie(this.recepieId).subscribe(data => {
      // console.log(data);
      this.recepie = of(data);
      this.ingredients = data.ingredients;
    });

    this.stepsService.getSteps(this.recepieId).subscribe(data => {
      this.steps$ = data[0].steps;
    });
  }

  ratingHandler(rating){
    // TODO- CHECK USER ID GUARD
    this.recepieService.addRating(this.recepieId,"OD45ZJRBa1flzhWj49myqvzL7oh2",rating);
    M.toast({html: 'Thanks for providing Rating!'})
  }
}
