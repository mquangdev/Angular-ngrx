import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/shared/consts/url';
import { GetFeedResponse } from '../types/get-feed-response';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  url = API_URL + '/articles';
  constructor(private http: HttpClient) {}
  getFeedGlobal(
    page: number = 0,
    pageSize: number = 10
  ): Observable<GetFeedResponse> {
    return this.http.get<GetFeedResponse>(
      `${this.url}?offset=${page}&limit=${pageSize}`
    );
  }
}
