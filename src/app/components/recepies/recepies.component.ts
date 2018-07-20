import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";

import { RecepiesService } from "../../services/recepies.service";
@Component({
  selector: "app-recepies",
  templateUrl: "./recepies.component.html",
  styleUrls: ["./recepies.component.css"]
})
export class RecepiesComponent implements OnInit {
  recepies: any[];
  searchConfig = {
    ...environment.algolia,
    indexName: 'recipes'
  }
  showSearch: boolean = false;

  constructor(private recepieService: RecepiesService) {}

  ngOnInit() {
    this.recepieService.getRecepies().subscribe(data => {
      this.recepies = data;
    });
  }

  searchChange(query: any){
    if(query.length){
      this.showSearch = true
    } else {
      this.showSearch = false;
    }
  }
}
