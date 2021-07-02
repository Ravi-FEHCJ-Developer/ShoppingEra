import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductsRoutingModule  } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component'; 


@NgModule({
  declarations: 
  [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ProductsRoutingModule 
  ]
})
export class ProductsModule { }
