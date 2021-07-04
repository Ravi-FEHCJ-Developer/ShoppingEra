import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsCategory } from 'src/app/interface/productsCategory_interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsCategoryService {

  productsCategory : ProductsCategory[] = []

  baseUrl : "https://localhost:5001/api/ItemsType";
  
  constructor( private http : HttpClient ) { }


  getAllCategories()
  {
    console.log()
    return this.http.get<ProductsCategory[]>(this.baseUrl , { responseType : "json" })
  }

    getMasterLocation()
    {
    this.http.get<ProductsCategory[]>(this.baseUrl).subscribe(
      (res) => {
        this.productsCategory = res;
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    );
  }


}
