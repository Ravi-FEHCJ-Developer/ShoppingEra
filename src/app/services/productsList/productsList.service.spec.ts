/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductsListService } from './productsList.service';

describe('Service: ProductsList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsListService]
    });
  });

  it('should ...', inject([ProductsListService], (service: ProductsListService) => {
    expect(service).toBeTruthy();
  }));
});
