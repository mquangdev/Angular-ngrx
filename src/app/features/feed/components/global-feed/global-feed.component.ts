import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { feedActions } from '../../store/actions';
import { GetFeedRequest } from '../../types/get-feed-request';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.css'],
})
export class GlobalFeedComponent implements OnInit {
  body: GetFeedRequest = {
    page: 0,
    pageSize: 10,
  };
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(
      feedActions.getGlobalArticles({
        request: this.body,
      })
    );
  }
}
