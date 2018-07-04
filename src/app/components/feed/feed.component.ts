import { Component, OnInit } from "@angular/core";
import { RecepiesService } from "../../services/recepies.service";
import { Observable, of } from "rxjs";
import * as M from "node_modules/materialize-css/dist/js/materialize";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"]
})
export class FeedComponent implements OnInit {
  recepies: any[];

  constructor(private rcpService: RecepiesService) {}

  ngOnInit() {
    this.rcpService.getFeedRecepies().subscribe(data => {
      this.recepies = data;
      this.DOMs();
    });
  }
  DOMs() {
    let elems = document.querySelectorAll(".parallax");
    let instances = M.Parallax.init(elems, {});

    let elems2 = document.querySelectorAll(".slider");
    let instances2 = M.Slider.init(elems2, {});
  }
}
