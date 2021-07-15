import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductsRoutingModule  } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component'; 
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete'

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
    ProductsRoutingModule,
    MatInputModule,
    MatAutocompleteModule 
  ]
})
export class ProductsModule { }
