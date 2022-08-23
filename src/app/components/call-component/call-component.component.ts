import { Component, OnInit } from '@angular/core';

@Component({
  //TODO: Component Çağırma
  selector: 'app-call-component', //<app-call-component></app-call-component>
  //selector: '#app-call-component', //<div id="app-call-component"></div>
  //selector: '.app-call-component', //<div class="app-call-component"></div>
  templateUrl: './call-component.component.html',
  styleUrls: ['./call-component.component.css']
})
export class CallComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
