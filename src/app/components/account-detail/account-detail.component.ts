import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { of } from "rxjs";

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  author: any
  id: any
  constructor(private user: UserService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.id = this.auth.currentUserId;
    this.user.getAuthor(this.id).subscribe(author => {
      this.author = of(author[0]);
    })

  }

}
