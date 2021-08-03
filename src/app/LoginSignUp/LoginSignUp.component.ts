import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import { AuthService } from '../services/Auth/auth.service';
import { Register_credential } from 'src/app/interface/register_credential';

@Component({
  selector: 'app-LoginSignUp',
  templateUrl: './LoginSignUp.component.html',
  styleUrls: ['./LoginSignUp.component.css']
})
export class LoginSignUpComponent implements OnInit 
{
  login_details : any;

  constructor(private authservice : AuthService) 
  {  }

  ngOnInit() 
  {
      $(".register").on('click', function(){
        $(".loginform").toggle("slow", function() {
        $(".hideregisterform").toggle("slow");
        });
      });
      $(".login").on('click', function(){
        $(".hideregisterform").toggle("fast", function() {
          $(".loginform").toggle();
          }); 
      });
  }

  // Register Form logic
  register( form:NgForm )
  {
    const register_credential = 
    {
      customer_name : form.value.name,
      customer_email : form.value.email,
      customer_mobileno : parseInt(form.value.mobile_number),
      customer_password : form.value.password,
      customer_repassword : form.value.confirm_password
    }

    this.authservice.registerData(register_credential).subscribe
    (
      (res) =>
      {
        console.log("posted");
      },
      (err) =>
      {
        console.log(err);
      }
    )

  }

  // login form login
  login( form:NgForm )
  {
    const login_credentials = 
    {
      email : form.value.email,
      password : form.value.password
    }
    this.authservice.login(login_credentials)
  }

  loggedIn()
  {
    this.authservice.loggedIn();
  }

  logout()
  {
    localStorage.removeItem('token');
    console.log("logged Out Successfully");
  }


}
