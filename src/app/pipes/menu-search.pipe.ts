import { Pipe, PipeTransform } from '@angular/core';
import { NavbarMenu } from '../entities/navbar-menus';

@Pipe({
  name: 'menuSearch'
})
export class MenuSearchPipe implements PipeTransform {

  transform(navbarMenus: NavbarMenu[], filterText: string): NavbarMenu[] {
    filterText = filterText.toLowerCase();

    return filterText ? navbarMenus.filter((m: NavbarMenu) =>
      m.menuName.toLowerCase().indexOf(filterText) !== -1 || m.menuUrl.toLowerCase().indexOf(filterText) !== -1) : navbarMenus;
  }

}
