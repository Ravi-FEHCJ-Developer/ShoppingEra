import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { data } from 'jquery';
import { AddToCartService } from '../services/AddToCart/AddToCart.service';
import { GetCartItems_Interface } from '../interface/GetCartItems';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 
  @Input() count: number;

  public Item_In_cart : number = 0; 
  @Output() Cart_Item_Count: EventEmitter<number> =   new EventEmitter();
  GetAllCartItems : GetCartItems_Interface[] = [];

  constructor
  ( 
    private getCartItemsService : AddToCartService,
    private toastrService: ToastrService 
  ) { }

    /* Set rates */
    public totalAmount : number = 0;
    public taxRate : number;
    public shippingRate : number; 
    public GrandTotal : number; 

  ngOnInit() 
  {
    if(localStorage.getItem('registration_ID'))
    {
      // get cart items
      this.GetCartItems(parseInt(localStorage.getItem('registration_ID')));
    }
  }

  onQuantityChange(event:Event, unit_price : number)
  {
    const NewQuantity = (event.target as HTMLInputElement).value;
    const item_total_amount = Number(NewQuantity) * unit_price;
  }

  GetCartItems(registration_ID : number)
  {
    this.getCartItemsService.GetCartItems(registration_ID).subscribe(
      (data) =>
      {
        this.GetAllCartItems = data
        this.Item_In_cart = this.GetAllCartItems.length;
        this.Cart_Item_Count.emit(this.GetAllCartItems.length)
        for(let i = 0; i<this.GetAllCartItems.length; i++)
        {
          this.totalAmount = this.totalAmount + this.GetAllCartItems[i].p_price 
        }
        this.taxRate = (this.totalAmount * 0.05) / 100;
        this.shippingRate = (this.totalAmount * 15.00) / 100;
        this.GrandTotal = this.totalAmount + this.taxRate + this.shippingRate
      },
      (err) =>
      {
        this.toastrService.error('already', 'in the cart', {
          timeOut: 2000,
          positionClass: 'toast-top-right',
          progressBar: true
        });
      }
    )
  }
}
