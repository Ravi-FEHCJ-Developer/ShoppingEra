/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Products_descriptionComponent } from './products_description.component';

describe('Products_descriptionComponent', () => {
  let component: Products_descriptionComponent;
  let fixture: ComponentFixture<Products_descriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Products_descriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Products_descriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
