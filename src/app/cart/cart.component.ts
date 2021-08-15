import { Component, Input, OnInit } from '@angular/core';
import { data } from 'jquery';
import { AddToCartService } from '../services/AddToCart/AddToCart.service';
import { GetCartItems_Interface } from '../interface/GetCartItems';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // @Input() Item_In_cart = ''; 
  GetAllCartItems : GetCartItems_Interface[] = [];

  constructor( private getCartItemsService : AddToCartService) { }

    /* Set rates + misc */
    public totalAmount : number = 0;
    public taxRate : number;
    public shippingRate : number; 
    public GrandTotal : number; 
    // public fadeTime = 300;

  ngOnInit() 
  {
    if(localStorage.getItem('registration_ID'))
    {
      // get cart items
      this.GetCartItems(parseInt(localStorage.getItem('registration_ID')));
    }

    /* Set rates + misc */
    // var taxRate = 0.05;
    // var shippingRate = 15.00; 
    // var fadeTime = 300;


    /* Assign actions */
    // $('.product-quantity input').change( function() {
    //   updateQuantity(this);
    // });

    // $('.product-removal button').click( function() {
    //   removeItem(this);
    // });


    /* Recalculate cart */
    // function recalculateCart()
    // {
    //   var subtotal = 0;
      
    //   /* Sum up row totals */
    //   $('.product').each(function () {
    //     subtotal += parseFloat($(this).children('.product-line-price').text());
    //   });
      
      /* Calculate totals */
      // var tax = subtotal * taxRate;
      // var shipping = (subtotal > 0 ? shippingRate : 0);
      // var total = subtotal + tax + shipping;
      
      /* Update totals display */
    //   $('.totals-value').fadeOut(fadeTime, function() {
    //     $('#cart-subtotal').html(subtotal.toFixed(2));
    //     $('#cart-tax').html(tax.toFixed(2));
    //     $('#cart-shipping').html(shipping.toFixed(2));
    //     $('#cart-total').html(total.toFixed(2));
    //     if(total == 0){
    //       $('.checkout').fadeOut(fadeTime);
    //     }else{
    //       $('.checkout').fadeIn(fadeTime);
    //     }
    //     $('.totals-value').fadeIn(fadeTime);
    //   });
    // }


    /* Update quantity */
    // function updateQuantity(quantityInput)
    // {
    //   console.log(quantityInput)
      /* Calculate line price */
      // const productRow = $(quantityInput).parent().parent();
      // const price = parseFloat(productRow.children('.product-price').text());
      // const quantity =  $("input[type='number']").val();
      // var linePrice = price * Number(quantity);
      
      /* Update line price display and recalc cart totals */
    //   productRow.children('.product-line-price').each(function () {
    //     $(this).fadeOut(fadeTime, function() {
    //       $(this).text(linePrice.toFixed(2));
    //       recalculateCart();
    //       $(this).fadeIn(fadeTime);
    //     });
    //   });  
    // }


    /* Remove item from cart */
    // function removeItem(removeButton)
    // {
    //   /* Remove row from DOM and recalc cart total */
    //   var productRow = $(removeButton).parent().parent();
    //   productRow.slideUp(fadeTime, function() {
    //     productRow.remove();
    //     recalculateCart();
    //   });
    // }
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
        console.log(err);
      }
    )
  }
}
