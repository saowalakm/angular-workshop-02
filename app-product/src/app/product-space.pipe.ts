import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productSpace'
})
export class ProductSpacePipe implements PipeTransform {

  transform(input: string, target: string): string {
    
    return input.replace(/\s/g, target);
  }

}
