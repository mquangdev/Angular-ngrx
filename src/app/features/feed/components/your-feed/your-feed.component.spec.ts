/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YourFeedComponent } from './your-feed.component';

describe('YourFeedComponent', () => {
  let component: YourFeedComponent;
  let fixture: ComponentFixture<YourFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
