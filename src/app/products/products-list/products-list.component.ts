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
  
  search_title_text_array = ""
  
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
  public FilteredProducts = [];
  public StoreFilteredProducts = [];
  public FinalFilteredProducts = [];
  checkBoxvalue(isChecked: boolean , selecteditem_typeID: any)
  {
      if (isChecked) 
      {
        this.categoryFilterService.getfiltercategory( selecteditem_typeID ).subscribe
        (
          (res) =>
          {
            this.FilteredProducts.push(res);                             
            for(let i = 0; i < this.FilteredProducts.length; i++)
            {
              var farray = this.FilteredProducts[i];
              // convert subarray into array
              for(let j = 0; j < farray.length; j++)
              {
                var obj = farray[j];
                this.StoreFilteredProducts.push(obj);
                // remove duplicate objects
                this.FinalFilteredProducts = this.StoreFilteredProducts.filter(( value, index ) => this.StoreFilteredProducts.indexOf( value ) === index)
              }
            } 
            // store filtered data into main product list to display on view side
            this.ProductsList = [];
            this.ProductsList = this.FinalFilteredProducts
          },          
          (err) =>
          {
            console.log(err)
          }
        )
      } 
      else
      {
        for(let i = 0; i<this.FinalFilteredProducts.length; i++)
        {
          if ( this.FinalFilteredProducts[i].p_type == selecteditem_typeID) 
          {
            // count number of indexex having an array with same key
            const count = this.FinalFilteredProducts.filter((obj) => obj.p_type === selecteditem_typeID).length;
            // give an index of an element of array
            var index = this.FinalFilteredProducts.indexOf(this.FinalFilteredProducts[i]); 
            this.FinalFilteredProducts.splice(index , count);
          }
        }

        // get all products after uncheck all inputs
        var checked = document.querySelectorAll('input:checked');
        if (checked.length === 0) 
        {
          this.getProducts();
        }
      }
  }



  // Search Bar Logic
  keyword = "p_name";
  isHidden : boolean = false;
  public searched_products = [];
  public resolved_searched_array = []
  public resolved_searched_arrayy = []
  onChangeSearch(val: string) 
  {
     if(val === '')
    {
      this.isHidden  = false;
      this.searched_products = [];
      this.getProducts();
    } 
    else
    {
      this.categoryFilterService.getSearchedProducts(val).subscribe
      (
        (res) => 
        {
          this.isHidden  = true;
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
            this.isHidden  = false;
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
        this.isHidden  = false;
        this.searched_products = [];
      },
      (err) => 
      { 
        console.log(err) 
      }
    )
  }


}
