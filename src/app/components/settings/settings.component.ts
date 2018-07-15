import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  email: string;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.email = this.auth.currentUser ? this.auth.currentUser.email : "";
  }

  changePassword(e){
    e.preventDefault();
    this.auth.resetPassword(this.email);
    
  }

  deleteAccount(e){
    e.preventDefault();
  }

}
