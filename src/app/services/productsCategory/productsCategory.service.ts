import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productsCategory_interface } from 'src/app/interface/productsCategory_interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsCategoryService 
{

  private baseUrl = "https://localhost:5001/api/ItemsType";
  
  constructor( private http : HttpClient ) { }

  getAllCategories()
  {
    return this.http.get<productsCategory_interface[]>(this.baseUrl , { responseType : "json" });
  }

}
