import { Component, OnInit } from '@angular/core';
import { RecepiesService } from "../../services/recepies.service";
import { of } from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  recepie: any
  constructor(private RecepieServe: RecepiesService) { }

  ngOnInit() {
    this.RecepieServe.getDashboardRecepies("OD45ZJRBa1flzhWj49myqvzL7oh2").subscribe(data => {
      this.recepie = of(data);
      console.log(this.recepie);
    });
  }

}
