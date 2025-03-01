import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@environments/environment.development';
import { Fruit } from '@interfaces/fruit.interface';

@Injectable({
  providedIn: 'root'
})
export class OnePieceService {
  private _http = inject(HttpClient);

  private apiUrl: string = environment.apiUrl;

  constructor() { }

  /**
   * Obtain all fruits list from API
   */
  public getAllFruits(): Observable<Fruit[]> {
    return this._http.get<Fruit[]>(`${this.apiUrl}/fruits/en`);
  }
}
