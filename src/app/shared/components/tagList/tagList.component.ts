import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { feedActions } from 'src/app/features/feed/store/actions';

@Component({
  selector: 'app-tagList',
  templateUrl: './tagList.component.html',
  styleUrls: ['./tagList.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class TagListComponent implements OnInit {
  @Input() tagList: string[] = [];
  constructor() {}

  ngOnInit() {}
}
