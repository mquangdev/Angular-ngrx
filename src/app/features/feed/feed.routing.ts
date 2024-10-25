import { Routes, RouterModule } from '@angular/router';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { YourFeedComponent } from './components/your-feed/your-feed.component';
import { FeedComponent } from './feed.component';
import { FeedTagComponent } from './components/feed-tag/feed-tag.component';

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
        path: 'feed',
        component: YourFeedComponent,
      },
      {
        path: 'tags/:tagName',
        component: FeedTagComponent,
      },
    ],
  },
];

export const FeedRoutes = RouterModule.forChild(routes);
