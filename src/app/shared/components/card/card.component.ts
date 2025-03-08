import { Component, Input } from '@angular/core';

import { Fruit } from '@interfaces/fruit.interface';
import { LimitStringPipe } from '@shared/pipes/limit-string.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [LimitStringPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() fruit!: Fruit;
}
