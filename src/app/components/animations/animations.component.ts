import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Animations } from 'src/app/define/animations';
@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  //TODO: Animation Kullanımı
  animations: [
    Animations.animeTriggerSize,
    Animations.animeTriggerToggle,
    Animations.animeTriggerBallon,
    Animations.animeTriggerNew
  ]
})
export class AnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //TODO: Animation Kullanımı
  size = 0;
  changeSize() {
    this.size = this.size === 0 ? 1 : 0;
  }

  show = false;
  get stateName() {
    return this.show ? 'show' : 'hide'
  }
  toggle() {
    this.show = !this.show;
  }

  currentState = 'initial';
  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
  arc = "false";
  toggleBounce() {
    this.arc = this.arc == 'false' ? 'true' : 'false';
  }
}
