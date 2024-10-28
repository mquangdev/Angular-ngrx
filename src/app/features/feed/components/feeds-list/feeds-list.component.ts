import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { GetFeedRequest } from '../../types/get-feed-request';
import { combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectFeeds,
  selectIsLoading,
  selectValidationErrors,
} from '../../store/reducers';
import { feedActions } from '../../store/actions';

@Component({
  selector: 'app-feeds-list',
  templateUrl: './feeds-list.component.html',
  styleUrls: ['./feeds-list.component.css'],
})
export class FeedsListComponent implements OnInit, OnChanges {
  @Input() type: 'global' | 'your' | 'tag' | null = null;
  @Input() tagName?: string;
  request: GetFeedRequest = {
    page: 0,
    pageSize: 10,
  };
  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    feeds: this.store.select(selectFeeds),
    errors: this.store.select(selectValidationErrors),
  });
  constructor(private store: Store) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.type) return;
    this.getFeeds();
  }
  ngOnInit() {}

  getFeeds() {
    if (this.type === 'global') {
      this.store.dispatch(
        feedActions.getGlobalArticles({ request: this.request })
      );
    }
    if (this.type === 'your') {
      this.store.dispatch(feedActions.getYourFeeds({ request: this.request }));
    }
    if (this.type === 'tag' && this.tagName) {
      this.store.dispatch(
        feedActions.getFeedByTag({
          request: { ...this.request, tagName: this.tagName },
        })
      );
    }
  }

  onChangePage(page: number) {
    this.request = {
      ...this.request,
      page: page,
    };
    this.getFeeds();
  }
}
