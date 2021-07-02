import { Component, OnInit } from '@angular/core';
import { ProductsList_interface } from 'src/app/interface/productsList_interface';
import { ProductsListService } from 'src/app/services/productsList/productsList.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css','./products-list.component.scss']
})

export class ProductsListComponent implements OnInit 
{

  data : Array<any>
  totalRecords : number
  page : Number = 1

  ProductsList : ProductsList_interface[] = [];
  
  constructor( private productsListService : ProductsListService ) 
  { 
    this.data = new Array<any>()
  }
  
  ngOnInit() 
  {
    this.getProducts();
  }
  
  getProducts()
  {
    this.productsListService.getAllData().subscribe(
      (res) => 
      {
        console.log(res.length)
        this.data = res
        this.totalRecords = res.length

        this.ProductsList = res 
      },
      (err) => { console.log(err) }
      )
    }

}
