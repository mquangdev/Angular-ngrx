import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { Store } from '@ngrx/store';
import { authActions } from './auth/store/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
})
export class AppComponent implements OnInit {
  title = 'ngrx';
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser());
  }
}
