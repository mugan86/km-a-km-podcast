import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  transform(time: number): string {
    return `${Math.floor(time / 60)
      .toString()
      .padStart(2, '0')}:${Math.floor(time % 60)
      .toString()
      .padStart(2, '0')}`;
  }
}
