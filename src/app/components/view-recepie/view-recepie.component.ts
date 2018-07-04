import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as M from "materialize-css/dist/js/materialize";
import { RecepiesService } from "../../services/recepies.service";
import { StepsService } from "../../services/steps.service";
import { of } from "rxjs";

@Component({
  selector: "app-view-recepie",
  templateUrl: "./view-recepie.component.html",
  styleUrls: ["./view-recepie.component.css"]
})
export class ViewRecepieComponent implements OnInit {
  recepie: any;
  steps$: any[];
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
      this.recepie = of(data);
      this.ingredients = data.ingredients;
    });

    this.stepsService.getSteps(this.recepieId).subscribe(data => {
      this.steps$ = data[0].steps;
    });
  }

  delete(e) {
    e.preventDefault();

    if (confirm("Are you sure?")) {
      this.recepieService.deleteRecepie(this.recepieId).then(() => {
        M.toast({ html: "Recepie deleted" });
        this.router.navigate(["/dashboard"]);
      });
    }
  }
}
