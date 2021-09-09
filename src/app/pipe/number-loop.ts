import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'numberLoop'})

export class NumberLoop implements PipeTransform {
    transform(value) : any {
        let res = [];
        for (let i = 1950; i < value; i++) {
            res.push(i);
        }
        return res;
    }
}
