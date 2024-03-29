import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './services/Auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  jwtHelper = new JwtHelperService();

  title = 'ShoppingEra';

  Item_In_cart : number;

  constructor(private authservice : AuthService){}

  ngOnInit()
  {
    const token = localStorage.getItem('token');
    if(token)
    {
      this.authservice.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }

  countChangedHandler(count: number) {
    this.Item_In_cart = count;
  }
}
