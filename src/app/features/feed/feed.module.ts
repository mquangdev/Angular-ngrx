import { BannerComponent } from './../../shared/components/banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { FeedRoutes } from './feed.routing';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { FeedsListComponent } from './components/feeds-list/feeds-list.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { BackEndErrorMsgComponent } from '../../shared/components/back-end-error-msg/back-end-error-msg.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { TagListComponent } from 'src/app/shared/components/tagList/tagList.component';
import { FeedTogglerComponent } from './components/feed-toggler/feed-toggler.component';
import { YourFeedComponent } from './components/your-feed/your-feed.component';
import { FeedTagComponent } from './components/feed-tag/feed-tag.component';

@NgModule({
  imports: [
    CommonModule,
    FeedRoutes,
    LoadingComponent,
    BackEndErrorMsgComponent,
    BannerComponent,
    PaginationComponent,
    TagListComponent,
  ],
  declarations: [
    FeedComponent,
    PopularTagsComponent,
    GlobalFeedComponent,
    FeedsListComponent,
    FeedTogglerComponent,
    YourFeedComponent,
    FeedTagComponent,
  ],
})
export class FeedModule {}
