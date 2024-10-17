import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  selectIsLoading,
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { RegisterRequest } from '../../types/register-request';
import { authActions } from '../../store/action';
import { combineLatest } from 'rxjs';
import { BackEndErrorMsgComponent } from 'src/app/shared/components/back-end-error-msg/back-end-error-msg.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    BackEndErrorMsgComponent,
  ],
})
export class RegisterComponent implements OnInit {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    isLoading: this.store.select(selectIsLoading),
    validationErrors: this.store.select(selectValidationErrors),
  });

  constructor(private fb: FormBuilder, private store: Store) {}
  ngOnInit(): void {}

  onSubmit() {
    var request: RegisterRequest = {
      user: this.form.getRawValue(),
    };
    this.store.dispatch(authActions.register({ request }));
  }
}
