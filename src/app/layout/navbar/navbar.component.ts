import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs';
import { NavbarMenu, NavbarMenus } from 'src/app/entities/navbar-menus';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild(MatSidenav)
 sidenav!: MatSidenav;
 navbarMenus: NavbarMenu[];
 FilteredNavbarMenus: NavbarMenu[] = [];
 filterText: string = "";

 constructor(private observer: BreakpointObserver) { }

 ngOnInit(): void {
  var model = new NavbarMenus();
  this.navbarMenus=model.navbarMenus;
  this.FilteredNavbarMenus=this.navbarMenus;
 }

 onInputChange() {
  this.FilteredNavbarMenus = this.filterText?
    this.navbarMenus.filter(m=> m.menuName.indexOf(this.filterText) !== -1 ||
                       m.menuUrl.indexOf(this.filterText) !== -1): this.navbarMenus
}

 ngAfterViewInit() {
   this.observer
     .observe(['(max-width: 768px)'])
     .pipe(delay(1))
     .subscribe((res) => {
       if (res.matches) {
         this.sidenav.mode = 'over';
         this.sidenav.close();
       } else {
         this.sidenav.mode = 'side';
         this.sidenav.open();
       }
     });
 }
}
