import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";

import { RecepiesService } from "../../services/recepies.service";
@Component({
  selector: "app-recepies",
  templateUrl: "./recepies.component.html",
  styleUrls: ["./recepies.component.css"]
})
export class RecepiesComponent implements OnInit {
  recepies: any[];
  constructor(private recepieService: RecepiesService) {}

  ngOnInit() {
    this.recepieService.getRecepies().subscribe(data => {
      this.recepies = data;
    });
  }
}
