/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cutomer_profileComponent } from './cutomer_profile.component';

describe('Cutomer_profileComponent', () => {
  let component: Cutomer_profileComponent;
  let fixture: ComponentFixture<Cutomer_profileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cutomer_profileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cutomer_profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
