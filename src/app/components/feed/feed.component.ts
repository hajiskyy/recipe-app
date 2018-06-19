import { Component, OnInit } from "@angular/core";
import { RecepiesService } from "../../services/recepies.service";
import { Observable } from "@firebase/util";
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
    // this.rcpService.getRecepies().subscribe(data => {
    //   this.recepies = data;
    // });

    this.recepies = [
      {
        description: "some cool description",
        difficulty: "easy",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/recepie-app.appspot.com/o/ratatouille.jpg?alt=media&token=fc1a3fcc-3250-4caf-88f3-bb78c7932101",
        name: "ratatouille",
        time: "6 minutes",
        userID: "OD45ZJRBa1flzhWj49myqvzL7oh2"
      },
      {
        description: "some cool description",
        difficulty: "easy",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/recepie-app.appspot.com/o/ratatouille.jpg?alt=media&token=fc1a3fcc-3250-4caf-88f3-bb78c7932101",
        name: "ratatouille",
        time: "6 minutes",
        userID: "OD45ZJRBa1flzhWj49myqvzL7oh2"
      },
      {
        description: "some cool description",
        difficulty: "easy",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/recepie-app.appspot.com/o/ratatouille.jpg?alt=media&token=fc1a3fcc-3250-4caf-88f3-bb78c7932101",
        name: "ratatouille",
        time: "6 minutes",
        userID: "OD45ZJRBa1flzhWj49myqvzL7oh2"
      },
      {
        description: "some cool description",
        difficulty: "easy",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/recepie-app.appspot.com/o/ratatouille.jpg?alt=media&token=fc1a3fcc-3250-4caf-88f3-bb78c7932101",
        name: "ratatouille",
        time: "6 minutes",
        userID: "OD45ZJRBa1flzhWj49myqvzL7oh2"
      },
      {
        description: "some cool description",
        difficulty: "easy",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/recepie-app.appspot.com/o/ratatouille.jpg?alt=media&token=fc1a3fcc-3250-4caf-88f3-bb78c7932101",
        name: "ratatouille",
        time: "6 minutes",
        userID: "OD45ZJRBa1flzhWj49myqvzL7oh2"
      },
      {
        description: "some cool description",
        difficulty: "easy",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/recepie-app.appspot.com/o/ratatouille.jpg?alt=media&token=fc1a3fcc-3250-4caf-88f3-bb78c7932101",
        name: "ratatouille",
        time: "6 minutes",
        userID: "OD45ZJRBa1flzhWj49myqvzL7oh2"
      },
      {
        description: "some cool description",
        difficulty: "easy",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/recepie-app.appspot.com/o/ratatouille.jpg?alt=media&token=fc1a3fcc-3250-4caf-88f3-bb78c7932101",
        name: "ratatouille",
        time: "6 minutes",
        userID: "OD45ZJRBa1flzhWj49myqvzL7oh2"
      }
    ];

    document.addEventListener("DOMContentLoaded", () => {
      let elems = document.querySelectorAll(".carousel");
      let instances = M.Carousel.init(elems, { fullWidth: false, indicators: true, padding: 60 });
    });

    document.addEventListener('DOMContentLoaded', () => {
      let elems = document.querySelectorAll('.parallax');
      let instances = M.Parallax.init(elems, {});
    });


  }
}
