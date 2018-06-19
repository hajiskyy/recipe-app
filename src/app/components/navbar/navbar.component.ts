import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sideNav(e){
    e.preventDefault();
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, {});
  }

}
