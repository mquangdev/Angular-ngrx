import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class LoadingComponent implements OnInit {
  @Input() isLoading: boolean = false;
  constructor() {}

  ngOnInit() {}
}
