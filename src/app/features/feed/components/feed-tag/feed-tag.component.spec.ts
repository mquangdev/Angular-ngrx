/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FeedTagComponent } from './feed-tag.component';

describe('FeedTagComponent', () => {
  let component: FeedTagComponent;
  let fixture: ComponentFixture<FeedTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
