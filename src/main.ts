import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appRoutes } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import * as authEffects from './app/auth/store/effects';
import * as feedEffects from './app/features/feed/store/effects';
import { authFeatureKey, authReducer } from './app/auth/store/reducers';
import {
  feedFeatureKey,
  feedReducer,
} from './app/features/feed/store/reducers';
import { authInterceptorFn } from './app/shared/interceptors/auth.interceptor';

// Group reducers and effects
const reducers = [
  { featureKey: authFeatureKey, reducer: authReducer },
  { featureKey: feedFeatureKey, reducer: feedReducer },
];

const effects = [authEffects, feedEffects];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptorFn])),
    provideRouter(appRoutes),
    provideStore({
      router: routerReducer,
    }),
    ...reducers.map(({ featureKey, reducer }) =>
      provideState(featureKey, reducer)
    ),
    provideEffects(effects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    provideEffects(),
    provideRouterStore(),
  ],
});
