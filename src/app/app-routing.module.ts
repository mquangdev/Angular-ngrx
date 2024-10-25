import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('src/app/auth/auth.routing').then((m) => m.registerRoutes),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/auth/auth.routing').then((m) => m.loginRoutes),
  },
  {
    path: 'profiles',
    loadChildren: () =>
      import('src/app/features/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('src/app/features/feed/feed.module').then((m) => m.FeedModule),
  },
];
