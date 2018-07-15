import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  email: string;
  password: string;
  loading: boolean = false;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(e: any) {
    this.loading = true;
    if (this.email !== undefined && this.password !== undefined) {
      this.auth
        .emailLogin(this.email, this.password)
        .then(res => {
          console.log(res);
          console.log(this.auth.authState);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log("fields undefined");
    }
  }

  GooLogin(e: any) {
    e.preventDefault();
    this.loading = true;
    this.auth
      .googleLogin()
      .then(res => {
        this.loading = false;
        this.router.navigate(["/"]);
      })
      .catch(err => {
        console.log(err);
      });
  }

  resetPassword(e: any) {
    e.preventDefault();
    if (this.email !== undefined) {
      this.auth.resetPassword(this.email).then(res => {
        console.log(res);
        // TODO- email sent message
      });
    } else {
      console.log("enter email");
      // TODO-check toast email
    }
  }

  register(e: any){
    e.preventDefault()
    this.router.navigate(["/register"]);
  }
}
