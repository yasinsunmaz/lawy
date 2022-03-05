import { Pipe, PipeTransform } from '@angular/core';
import { Users } from '../entities/user';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {
  //TODO: Basic Filter Pipe Kullanımı
  transform(value: Users[], filterText: string): Users[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : ""
    return filterText ? value
      .filter((p: Users) => p.username.toLocaleLowerCase().indexOf(filterText) !== -1) : value
  }

}
