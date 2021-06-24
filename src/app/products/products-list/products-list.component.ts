import { Component, OnInit } from '@angular/core';

import { Options } from 'ng5-slider';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css','./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  value: number = 40;
  highValue: number = 60;
  options: Options = {
    floor: 0,
    ceil: 100
  };
  constructor() { }

  ngOnInit() 
  {
  }

}
