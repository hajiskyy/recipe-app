import { Component, OnInit } from '@angular/core';
import { RecepiesService } from "../../services/recepies.service";
import { AuthService } from "../../services/auth.service";
import { of } from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  recepie: any
  constructor(
    private RecepieServe: RecepiesService,
    private auth: AuthService
  
  ) { }

  ngOnInit() {
    this.RecepieServe.getDashboardRecepies(this.auth.currentUserId).subscribe(data => {
      this.recepie = of(data);
    });
  }

}
