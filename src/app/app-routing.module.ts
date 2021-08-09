import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule  } from '@angular/platform-browser';
import { CommonModule, } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LoginSignUpComponent } from './LoginSignUp/LoginSignUp.component';
import { Cutomer_profileComponent } from './cutomer_profile/cutomer_profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Edit_profileComponent } from './edit_profile/edit_profile.component';
import { Products_descriptionComponent } from './products_description/products_description.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = 
[
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },

  { path: 'aboutUs', component: AboutusComponent },
  
  { path: 'login', component: LoginSignUpComponent },
  
  { path: 'blogs', component: BlogsComponent },
  
  { path: "profile", component: Cutomer_profileComponent },
  { path: 'profile/:id', component: Edit_profileComponent } ,
  
  { path: 'products', loadChildren: () => import('./products/products.module').then(mod=>mod.ProductsModule)},
  { path: 'products_description', component: Products_descriptionComponent },
  
  { path: 'cart', component: CartComponent } ,
  
  { path: '**', component: PagenotfoundComponent, redirectTo: '', },
];

@NgModule({
  imports: 
  [ 
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: 
  [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [ NavbarComponent, HomeComponent, FooterComponent, AboutusComponent, BlogsComponent, LoginSignUpComponent, Cutomer_profileComponent, Edit_profileComponent, Products_descriptionComponent]
