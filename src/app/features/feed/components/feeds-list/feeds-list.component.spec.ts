/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FeedsListComponent } from './feeds-list.component';

describe('FeedsListComponent', () => {
  let component: FeedsListComponent;
  let fixture: ComponentFixture<FeedsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
