import { Routes, RouterModule } from '@angular/router';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { YourFeedComponent } from './components/your-feed/your-feed.component';
import { FeedComponent } from './feed.component';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
    children: [
      {
        path: '',
        redirectTo: 'global',
        pathMatch: 'full',
      },
      {
        path: 'global',
        component: GlobalFeedComponent,
      },
      {
        path: 'your',
        component: YourFeedComponent,
      },
    ],
  },
];

export const FeedRoutes = RouterModule.forChild(routes);
