import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Subscription } from 'rxjs';
import { selectCurrentUser } from 'src/app/auth/store/reducers';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.css'],
})
export class FeedTogglerComponent implements OnInit {
  @Input() tagName: string = '';
  subscriptions: Subscription[] = [];
  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser),
  });

  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscriptions.push(
      this.activatedRoute.params.subscribe({
        next: (params) => {
          console.log(params);
        },
      })
    );
  }
}
