import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitString',
  standalone: true
})
export class LimitStringPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (value.length >= limit) {
      return `${value.slice(0, limit)}...`;
    } else {
      return value;
    }
  }

}
