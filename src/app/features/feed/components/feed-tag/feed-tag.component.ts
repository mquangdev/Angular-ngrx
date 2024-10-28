import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { feedActions } from '../../store/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feed-tag',
  templateUrl: './feed-tag.component.html',
  styleUrls: ['./feed-tag.component.css'],
})
export class FeedTagComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  tagName: string = '';
  constructor(private activatedRoute: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.subscriptions.push(
      this.activatedRoute.params.subscribe({
        next: (params) => {
          this.tagName = params['tagName'];
          this.store.dispatch(
            feedActions.setTagSelected({
              tag: params['tagName'],
            })
          );
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
