import { Component, inject, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { OnePieceService } from '@services/one-piece.service';
import { Fruit } from '@interfaces/fruit.interface';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss'
})
export class FruitsComponent implements OnInit {
  private _onepieceService: OnePieceService;

  public fruits: Fruit[];

  constructor() {
    this._onepieceService = inject(OnePieceService);
    this.fruits = []
  }

  ngOnInit(): void {
    // this._onepieceService.getAllFruits()
    //   .subscribe(resp => { this.fruits = resp });
  }
}
