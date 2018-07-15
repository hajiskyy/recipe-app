import { Component, OnInit } from "@angular/core";
import * as M from "materialize-css/dist/js/materialize";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}
  sideNav(e) {
    e.preventDefault();
    let elems = document.querySelectorAll(".sidenav");
    let instances = M.Sidenav.init(elems, {});
  }

  signOut(e: any) {
    e.preventDefault();

    this.auth.signOut();
    this.router.navigate(["/"]);
  }
}
