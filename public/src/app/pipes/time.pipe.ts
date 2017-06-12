import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timePipe' })
export class timePipe implements PipeTransform {
    transform(time: any) {
    return time.slice(0, 5);
    }
}

