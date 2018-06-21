import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { RecepiesService } from "../../services/recepies.service";
import { of } from 'rxjs';


@Component({
  selector: "app-recepie-detail",
  templateUrl: "./recepie-detail.component.html",
  styleUrls: ["./recepie-detail.component.css"]
})
export class RecepieDetailComponent implements OnInit {
  recepie: any;
  constructor(
    private active: ActivatedRoute,
    private router: Router,
    private recepieService: RecepiesService
  ) {}

  ngOnInit() {
    let id = this.active.snapshot.paramMap.get("id");
    this.recepieService.getSingleRecepie(id).subscribe(data => {
      // console.log(data);
      this.recepie = of(data);
    });
  }
}
