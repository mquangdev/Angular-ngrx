import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Subscription } from 'rxjs';
import { selectCurrentUser } from 'src/app/auth/store/reducers';
import { selectTagSelected } from '../../store/reducers';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.css'],
})
export class FeedTogglerComponent implements OnInit, OnDestroy {
  tagName: string = '';
  subscriptions: Subscription[] = [];
  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser),
    tagSelected: this.store.select(selectTagSelected),
  });

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  navigateToTag(tag: string, $event: MouseEvent) {
    console.log(tag);
    // $event.preventDefault();
    // this.router.navigate(['tags', tag]);
  }
}
