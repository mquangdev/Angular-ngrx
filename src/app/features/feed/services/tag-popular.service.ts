import { Injectable } from '@angular/core';
import { API_URL } from '../../../shared/consts/url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PopularTagResponse } from '../types/popular-tag-response';

@Injectable({
  providedIn: 'root',
})
export class TagPopularService {
  url = API_URL + '/tags';
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<PopularTagResponse> {
    return this.httpClient.get<PopularTagResponse>(this.url);
  }
}
