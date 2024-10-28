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
    pageSize: number = 10,
    tagName?: string
  ): Observable<GetFeedResponse> {
    let url = `${this.url}?offset=${page}&limit=${pageSize}`;
    if (tagName) {
      url += `&tag=${tagName}`;
    }
    return this.http.get<GetFeedResponse>(url);
  }

  getYourFeed(
    page: number = 0,
    pageSize: number = 10
  ): Observable<GetFeedResponse> {
    return this.http.get<GetFeedResponse>(
      `${this.url}/feed?offset=${page}&limit=${pageSize}`
    );
  }
}
