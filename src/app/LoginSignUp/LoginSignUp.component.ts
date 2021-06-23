import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-LoginSignUp',
  templateUrl: './LoginSignUp.component.html',
  styleUrls: ['./LoginSignUp.component.css']
})
export class LoginSignUpComponent implements OnInit {

  constructor() { }

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




}
