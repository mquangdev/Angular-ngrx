import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { feedActions } from '../../store/actions';
import {
  selectIsLoading,
  selectPopularTags,
  selectValidationErrors,
} from '../../store/reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.css'],
})
export class PopularTagsComponent implements OnInit {
  data$ = combineLatest({
    popularTags: this.store.select(selectPopularTags),
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectValidationErrors),
  });
  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(feedActions.getPopularTags());
  }

  navigateToTag(tagName: string, $event: MouseEvent) {
    $event.preventDefault();
    this.router.navigate(['tags', tagName]);
  }
}
