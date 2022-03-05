import { Pipe, PipeTransform } from '@angular/core';
import { UserPipeModel } from '../entities/user-pipe';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {
  //TODO: Filter Pipe Kullanımı
  transform(value: UserPipeModel[], filterBy: string): any {
    if (filterBy === 'h') {
      return value;
    }
    const filteredUsers: UserPipeModel[] = []
    for (const user of value) {
      if (user.gender.toLowerCase()[0] === filterBy) {
        filteredUsers.push(user)
      }
    }

    return filteredUsers;
  }
}
