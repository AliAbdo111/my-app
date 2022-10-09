import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtoEg'
})
export class UsdtoEgPipe implements PipeTransform {

  transform(value:number) :number
  {
    return value *19;
  }

}
