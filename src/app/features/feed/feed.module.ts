import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { FeedRoutes } from './feed.routing';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';

@NgModule({
  imports: [CommonModule, FeedRoutes],
  declarations: [FeedComponent, PopularTagsComponent],
})
export class FeedModule {}
