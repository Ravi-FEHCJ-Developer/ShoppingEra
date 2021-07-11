import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductsRoutingModule  } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component'; 
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { FlexLayoutModule } from '@angular/flex-layout';


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
    AutocompleteLibModule
//     MatFormFieldModule,
// MatInputModule,
// FlexLayoutModule 
  ]
})
export class ProductsModule { }
