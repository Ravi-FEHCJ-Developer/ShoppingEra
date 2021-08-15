// import { NotificationService } from "./notification.service";
// import { environment } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";
import { Register_credential } from 'src/app/interface/register_credential';
import { ToastrService } from "ngx-toastr";


@Injectable({
  providedIn: "root",
})

export class AuthService {
  user: any;
  jwtHelper = new JwtHelperService();
  decodedToken : any;
  
  constructor
  (
    private toastrService: ToastrService,
    private http: HttpClient,
    private router: Router,
  ) {}

  LoginbaseUrl = "https://localhost:5001/api/Auth/Login?";
  // https://localhost:5001/api/Auth/Login?email=rl%40gmail.com&password=hfh

  RegisterbaseUrl = "https://localhost:5001/api/Auth";

  
  registerData( Data:any )
  {
    // console.log(Data);
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
            // console.table(user);
            localStorage.setItem("registration_ID", user.registration_id);
            this.user = JSON.stringify(user);
            console.log("Successfully Logged In");
            this.router.navigate(["/home"]);
            this.toastrService.success('Successfully', 'Login', {
              timeOut: 2000,
              positionClass: 'toast-bottom-right',
              progressBar: false
            });
          }
        },
        (error) => 
        {
          this.toastrService.error('Either Email or ', 'Password is wrong!', {
            timeOut: 2000,
            positionClass: 'toast-bottom-right',
            progressBar: false
          });
        }
      );
  }

  loggedIn()
  {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token)
  }


}
