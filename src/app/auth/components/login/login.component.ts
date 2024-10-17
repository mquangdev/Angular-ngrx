import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { BackEndErrorMsgComponent } from 'src/app/shared/components/back-end-error-msg/back-end-error-msg.component';
import {
  selectIsLoading,
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { LoginRequest } from '../../types/login-request';
import { authActions } from '../../store/action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    BackEndErrorMsgComponent,
  ],
})
export class LoginComponent implements OnInit {
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    isLoading: this.store.select(selectIsLoading),
    validationErrors: this.store.select(selectValidationErrors),
  });
  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    var request: LoginRequest = {
      user: this.form.getRawValue(),
    };
    this.store.dispatch(authActions.login({ request: request }));
  }
}
