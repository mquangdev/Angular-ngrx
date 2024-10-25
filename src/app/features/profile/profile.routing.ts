import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: ':username',
        component: ProfileDetailComponent,
      },
    ],
  },
];

export const ProfileRoutes = RouterModule.forChild(routes);
