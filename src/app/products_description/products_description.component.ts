import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products_description',
  templateUrl: './products_description.component.html',
  styleUrls: ['./products_description.component.css']
})
export class Products_descriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
    $(document).ready(function(){
      $(".wish-icon i").click(function(){
        $(this).toggleClass("fa-heart fa-heart-o");
      });
    });	
  }

}
