import { Component, OnInit } from '@angular/core';

import { ProductsList_interface } from 'src/app/interface/productsList_interface';
import { ProductsListService } from 'src/app/services/productsList/productsList.service';

import { productsCategory_interface } from 'src/app/interface/productsCategory_interface';
import { ProductsCategoryService } from 'src/app/services/productsCategory/productsCategory.service';

import { CategoryFilterService } from '../../services/category_filter/categoryFilter.service';


declare const changeWord : any;
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
  Search_products_name : productsCategory_interface[] =[]
  public ProductsCategory = [];

  
  constructor
  ( 
    private productsListService : ProductsListService , 
    private productsCategoryService : ProductsCategoryService,
    private categoryFilterService : CategoryFilterService  
  ) 
  { 
    this.data = new Array<any>()
  }
  
  items = ["red","ornge"]
  
  ngOnInit() 
  {
    this.getCategories();
    this.getProducts();
  }


  // get categories of products  
  getCategories()
  {
    this.productsCategoryService.getAllCategories().subscribe
    (
      (data) => 
      {
        this.ProductsCategory = data 
      },
      (err) => 
      { 
        console.log(err) 
      }
    )
  }
  

  // get products List
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






  // Filter Checkbox data logic
  public FinalFilteredProducts = [];
  checkBoxvalue(isChecked: boolean , selecteditem_typeID: any)
  {
      if (isChecked) 
      {
        this.categoryFilterService.getfiltercategory( selecteditem_typeID ).subscribe
        (
          (res) =>
          {
            // Declare empty object
            let uniqueObject = {};
              
            // extract objects/elements from array 
            for (let i in res) 
            {
                // Extract the title
                var objTitle = res[i]['p_name'];
      
                // Use the title as the index
                uniqueObject[objTitle] = res[i];
            }

            // push unique object into array
            for (let i in uniqueObject) 
            {
              this.FinalFilteredProducts.push(uniqueObject[i]);
            }
    
            this.ProductsList = []
            this.ProductsList  =  this.FinalFilteredProducts
          },          
          (err) =>
          {
            console.log(err)
          }
        )
      } 
      else
      {
        for(let i = 0; i<this.ProductsList.length; i++)
        {
          if ( this.ProductsList[i].p_type == selecteditem_typeID) 
          {
            // count number of indexex having an array with same key
            const count = this.ProductsList.filter((obj) => obj.p_type === selecteditem_typeID).length;
            // give an index of an element of array
            var index = this.ProductsList.indexOf(this.ProductsList[i]); 
            this.ProductsList.splice(index , count);
          }
        }

        // get all products after uncheck all inputs
        var checked = document.querySelectorAll('input:checked');
        if (checked.length === 0) 
        {
          this.FinalFilteredProducts = []
          this.ProductsList = []
          this.getProducts();
        }
      }
  }



  // Search Bar Logic
  public searched_products = [];
  onChangeSearch(val: any) 
  {
    this.searched_products = [];
     if(val === '')
    {
      this.searched_products = [];
      this.getProducts();
    } 
    else
    {
      this.categoryFilterService.getSearchedProducts(val).subscribe
      (
        (res) => 
        {
          this.Search_products_name = res;
          if(this.Search_products_name.length > 0)
          {
            for(let i = 0; i < this.Search_products_name.length; i++)
            {
              this.searched_products.push(this.Search_products_name[i])
            } 
          }
          else
          {
            alert("No Such Product is available!");
            this.searched_products = [];
          }
        },
        (err) => 
        { 
          console.log(err) 
        }
      )
    }
  }


  selected(val: number) 
  {
    console.log(val)
    this.productsListService.getDataById(val).subscribe
    (
      (res) => 
      {
        this.ProductsList = []
        this.ProductsList.push(res) 
        this.searched_products = [];
      },
      (err) => 
      { 
        console.log(err) 
      }
    )
  }


}
