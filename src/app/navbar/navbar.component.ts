import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as $ from 'jquery';
import { AuthService } from '../services/Auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit 
{
  // Item_In_cart : number = 0;
  @Input() Item_In_cart: number;

  IsShow : boolean = false;
  
  constructor(public authService : AuthService, public route : Router) 
  { }
  
  
  
  loggedIn()
  {
    this.IsShow = !this.IsShow;
    this.authService.loggedIn();
  }
  
  

  logout()
  {
    this.IsShow = !this.IsShow;
    localStorage.removeItem('token');
    localStorage.removeItem('registration_ID');
    console.log("logged Out Successfully");
    this.route.navigate(['/', 'home']);
  }


  ngOnInit() 
  {
    
    (function($) { "use strict";
    
    //scroll Animation
    $(function() {
      var header = $(".start-style");
      $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
      
        if (scroll >= 10) {
          header.removeClass('start-style').addClass("scroll-on");
        } else {
          header.removeClass("scroll-on").addClass('start-style');
        }
      });
    });		
      
    //Animation
    $(document).ready(function() {
      $('body.hero-anime').removeClass('hero-anime');
    });

    //Menu On Hover
    $('body').on('mouseenter mouseleave','.nav-item',function(e)
    {
        if ($(window).width() > 750) {
          var _d=$(e.target).closest('.nav-item');_d.addClass('show');
          setTimeout(function(){
          _d[_d.is(':hover')?'addClass':'removeClass']('show');
          },1);
        }
    });	


    //Switch light/dark
    // $("#switch").on('click', function () {
    //   if ($("body").hasClass("dark")) {
    //     $("body").removeClass("dark");
    //     $("#switch").removeClass("switched");
    //   }
    //   else {
    //     $("body").addClass("dark");
    //     $("#switch").addClass("switched");
    //   }
    // });  

    })(jQuery); 
  }

}
