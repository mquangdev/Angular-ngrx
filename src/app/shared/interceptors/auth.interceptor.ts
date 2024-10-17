import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersistanceService } from '../services/persistance.service';
import { KEY_STORAGE } from '../consts/storage';

export const authInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  // Inject dependencies
  const persistance = inject(PersistanceService);
  const accessToken = persistance.get(KEY_STORAGE.accessToken);

  if (accessToken) {
    // Clone the request to add the Authorization header
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return next(authReq);
  }

  // Pass on the original request if no token is present
  return next(req);
};
