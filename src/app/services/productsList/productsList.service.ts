import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsList_interface } from 'src/app/interface/productsList_interface';

@Injectable({
  providedIn: 'root'
})

export class ProductsListService 
{

  baseUrl = "https://localhost:5001/api/Products/";

  constructor(private http : HttpClient) { }

  getAllData()
  {
    return this.http.get<ProductsList_interface[]>(this.baseUrl , { responseType : "json"} )
  }

  getDataById(p_type : number)
  {
    return this.http.get<ProductsList_interface>(this.baseUrl + p_type, { responseType : "json"} )
  }

}
