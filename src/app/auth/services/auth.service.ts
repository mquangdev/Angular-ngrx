import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_URL } from 'src/app/shared/consts/url';
import { CurrentUser } from 'src/app/shared/types/current-user';
import { AuthResponse } from '../types/auth-response';
import { LoginRequest } from '../types/login-request';
import { RegisterRequest } from '../types/register-request';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUserMap(response: AuthResponse) {
    return response.user;
  }

  getCurrentUser(): Observable<CurrentUser> {
    return this.http
      .get<AuthResponse>(API_URL + '/user')
      .pipe(map(this.getUserMap));
  }

  register(request: RegisterRequest): Observable<CurrentUser> {
    return this.http
      .post<AuthResponse>(API_URL + '/users', request)
      .pipe(map(this.getUserMap));
  }

  login(request: LoginRequest): Observable<CurrentUser> {
    return this.http
      .post<AuthResponse>(API_URL + '/users/login', request)
      .pipe(map(this.getUserMap));
  }
}
