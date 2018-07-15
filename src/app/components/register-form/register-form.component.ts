import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as M from "materialize-css/dist/js/materialize";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  cpassword: string;
  loading: boolean;

  constructor(
    private auth: AuthService,
    private user: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = false;
  }

  check(e: any) {
    if (this.password !== this.cpassword) {
      M.toast({ html: "Passwords do not match" });
    }
  }

  onSubmit() {
    this.loading = true;
    if (this.password !== this.cpassword) {
      M.toast({ html: "Passwords do not match" });
    } else {
      let author = {
        name: this.name,
        email: this.email,
        userId: null
      };
  
      this.auth
        .emailSignUp(this.email, this.password, author)
        .then(res => {
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
}
