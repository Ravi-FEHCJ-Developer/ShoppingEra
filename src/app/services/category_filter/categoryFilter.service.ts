import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productsCategory_interface } from 'src/app/interface/productsCategory_interface';

@Injectable({
  providedIn: 'root'
})

export class CategoryFilterService 
{

  constructor(private http : HttpClient) { }

  private baseUrl = "https://localhost:5001/api/Filter_products/";

  getfiltercategory(item_typeID: any)
  {
    return this.http.get<productsCategory_interface[]>( this.baseUrl + item_typeID , { responseType: "json" } );
  }

}
