import { Component, OnInit } from '@angular/core';
import { ProductsList_interface } from 'src/app/interface/productsList_interface';
import { ProductsListService } from 'src/app/services/productsList/productsList.service';

import { ProductsCategory } from 'src/app/interface/productsCategory_interface';
import { ProductsCategoryService } from 'src/app/services/productsCategory/productsCategory.service';

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
  ProductsCategoryInstance : ProductsCategory[] = [];
  
  constructor( private productsListService : ProductsListService , private productsCategoryService : ProductsCategoryService ) 
  { 
    this.data = new Array<any>()
  }
  
  ngOnInit() 
  {
    this.getCategories();
    this.getProducts();
  }


  getCategories()
  {
    this.productsCategoryService.getMasterLocation().subscribe
    (
      (res) => 
      {
        // console.log(res)
        // console.log("products Category")
        this.ProductsCategoryInstance = res    
        // console.log(this.ProductsCategoryInstance)
      },
      (err) =>
      {
        // return err
      }
    )
  }
  

  getProducts()
  {
    this.productsListService.getAllData().subscribe
    (
      (res) => 
      {
        this.data = res
        this.totalRecords = res.length

        this.ProductsList = res 
      },
      (err) => 
      { 
        console.log(err) 
      }
      )
    }

}
