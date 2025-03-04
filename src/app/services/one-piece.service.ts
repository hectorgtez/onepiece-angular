import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@environments/environment.development';
import { Fruit } from '@interfaces/fruit.interface';

@Injectable({
  providedIn: 'root'
})
export class OnePieceService {
  private _http: HttpClient;
  private _apiUrl: string;

  constructor() {
    this._http = inject(HttpClient);
    this._apiUrl = environment.apiUrl;
  }

  /**
   * Obtain all fruits list from API
   */
  public getAllFruits(): Observable<Fruit[]> {
    return this._http.get<Fruit[]>(`${this._apiUrl}/fruits/en`);
  }
}
