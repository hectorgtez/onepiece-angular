import { Component, inject, OnInit } from '@angular/core';

import { OnePieceService } from '@services/one-piece.service';
import { Fruit } from '@interfaces/fruit.interface';
import { CardComponent } from '@shared/components/card/card.component';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [CardComponent],
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
    this._onepieceService.getAllFruits()
      .subscribe(resp => { this.fruits = resp });
  }
}
