import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LoginSignUpComponent } from './LoginSignUp/LoginSignUp.component';

const routes: Routes = 
[
  { path: '', component: HomeComponent },
  { path: 'aboutUs', component: AboutusComponent },
  { path: 'login', component: LoginSignUpComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(mod=>mod.ProductsModule)}
];

@NgModule({
  imports: 
  [ 
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: 
  [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [ NavbarComponent, HomeComponent, FooterComponent, AboutusComponent, BlogsComponent, LoginSignUpComponent]
