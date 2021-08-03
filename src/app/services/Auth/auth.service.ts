// import { NotificationService } from "./notification.service";
// import { environment } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";
import { Register_credential } from 'src/app/interface/register_credential';

@Injectable({
  providedIn: "root",
})

export class AuthService {
  user: any;
  jwtHelper = new JwtHelperService();
  decodedToken : any;
  constructor(
    private http: HttpClient,
    private router: Router
    // private notification: NotificationService
  ) {}

  LoginbaseUrl = "https://localhost:5001/api/Auth/Login?";
  // https://localhost:5001/api/Auth/Login?email=rl%40gmail.com&password=hfh

  RegisterbaseUrl = "https://localhost:5001/api/Auth";
  
  registerData( Data:any )
  {
    console.log(Data);
    return this.http.post( this.RegisterbaseUrl,Data,{ responseType : "json" });
  }
  login(Data: any) {
    this.http
      .get(
        this.LoginbaseUrl +
          "email=" +
          Data.email +
          "&password=" +
          Data.password +
          ""
      )
      .subscribe(
        (user: any) => {
          if (user) {
            localStorage.setItem("token", user.token);
            this.decodedToken = this.jwtHelper.decodeToken(user.token);
            console.log(this.decodedToken);
            // localStorage.setItem("user", JSON.stringify(user.customer_email));
            this.user = JSON.stringify(user);
            console.log("Successfully Logged In");
            this.router.navigate(["/home"]);
            // this.notification.showNotification(
            //   "Log In Successful !!",
            //   "success"
            // );
          }
        },
        (error) => {
          // this.notification.showNotification(error.error.text, "danger");
          console.log("Either Email or pwd is wrong!");
          console.log(error);
        }
      );
  }

  loggedIn()
  {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token)
  }


}
