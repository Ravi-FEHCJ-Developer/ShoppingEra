/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoryFilterService } from './categoryFilter.service';

describe('Service: CategoryFilter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryFilterService]
    });
  });

  it('should ...', inject([CategoryFilterService], (service: CategoryFilterService) => {
    expect(service).toBeTruthy();
  }));
});
