import { Component, OnInit } from '@angular/core';
// import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router,
    ){}

  // isUserAuthenticate()
  // {

    // const token = localStorage.getItem("token");

    // if (token && !this.JwtHelper.isTokenExpired(token)) 
    // {
    //   return true;
    // } 
    // else 
    // {
    //   this.router.navigate(["login"]);
      // return false;
    // }
  // }



  ngOnInit() 
  {

    $("figure").mouseleave(
        function() {
          $(this).removeClass("hover");
        }
      );      
  }

}
