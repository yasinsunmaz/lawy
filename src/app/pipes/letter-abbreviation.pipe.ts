import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letterAbbreviation'
})
export class LetterAbbreviationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const nameSurname = value.split(' ');
    let avatar;
    if (nameSurname.length > 1) {
      avatar = nameSurname[0].slice(0, 1).toUpperCase() + "." + nameSurname[1].slice(0, 1).toUpperCase()+".";
    } else {
      avatar = nameSurname[0].slice(0, 1).toUpperCase();
    }
    return avatar;
  }

}
