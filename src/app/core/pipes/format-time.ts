import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    standalone: true,
    name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {
    transform(time: number): string {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }
}