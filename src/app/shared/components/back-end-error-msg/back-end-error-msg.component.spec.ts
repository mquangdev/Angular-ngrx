import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndErrorMsgComponent } from './back-end-error-msg.component';

describe('BackEndErrorMsgComponent', () => {
  let component: BackEndErrorMsgComponent;
  let fixture: ComponentFixture<BackEndErrorMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackEndErrorMsgComponent]
    });
    fixture = TestBed.createComponent(BackEndErrorMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
