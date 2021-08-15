import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';
import { GetCartItems_Interface } from 'src/app/interface/GetCartItems';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService 
{

  constructor(private http : HttpClient) { }

  AddToCart_BaseUrl = "https://localhost:5001/api/OrderItems"

  GetCartItem_BaseUrl = "https://localhost:5001/api/OrderItems/" 

  AddToCart( single_item_details : any )
  {
    return this.http.post( this.AddToCart_BaseUrl,single_item_details,{ responseType : "json" });
  }

  GetCartItems( registration_id : number)
  {
    return this.http.get<GetCartItems_Interface[]>( this.GetCartItem_BaseUrl + registration_id , { responseType : "json" })
  }

}
