import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  standalone: true,
  imports: [NgxPaginationModule, CommonModule],
})
export class PaginationComponent implements OnInit {
  @Input() collection: any[] = [];
  @Input() currentPage: number = 1;
  @Input() pageSize: number = 10;
  @Input() totalItems: number = 0;
  @Output() page$ = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}
  onChangePage(page: number) {
    this.page$.emit(page);
  }
}
