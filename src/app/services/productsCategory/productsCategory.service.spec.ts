/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductsCategoryService } from './productsCategory.service';

describe('Service: ProductsCategory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsCategoryService]
    });
  });

  it('should ...', inject([ProductsCategoryService], (service: ProductsCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
