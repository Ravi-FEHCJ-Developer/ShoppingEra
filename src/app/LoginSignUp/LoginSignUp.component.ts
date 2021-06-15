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
    (function($) { "use strict";

      $('.register').on('click',function(e) {
        e.preventDefault();        
        $(this).parent().addClass('loginform');
        $(this).parent().siblings().removeClass('active');
        
        var target = $(this).attr('href');

        $('.tab-content > div').not(target).hide();
        
        $(target).fadeIn(600);
        
      });

    })(jQuery); 
  }




}
