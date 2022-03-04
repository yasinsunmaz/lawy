//TODO: Animation Kullanımı
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
export const Animations = {
    animeTriggerSize:
      trigger("size", [
        state("0", style({
          backgroundColor: "yellow",
          width: "100px",
          height: "100px"
        })),
        state("1", style({
          backgroundColor: "green",
          width: "300px",
          height: "300px"
        })),
        transition("0 => 1", animate("700ms")),
        transition("1 => 0", animate("500ms")),
      ]),
    animeTriggerToggle:
      trigger('popOverState', [
        state('show', style({
          opacity: 1
        })),
        state('hide', style({
          opacity: 0
        })),
        transition('show => hide', animate('600ms ease-out')),
        transition('hide => show', animate('1000ms ease-in'))
      ]),
    animeTriggerBallon: trigger('balloonEffect', [
      state('initial', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('final', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('final=>initial', animate('1000ms')),
      transition('initial=>final', animate('1500ms'))
    ]),
    animeTriggerNew:
      trigger('animateArc', [
        state('true', style({
          left: '400px',
          top: '100px'
        })),
        state('false', style({
          left: '0',
          top: '100px'
        })),
        transition('false => true', animate('1000ms linear', keyframes([
          style({ left: '0', top: '100px', offset: 0 }),
          style({ left: '200px', top: '50px', offset: 0.50 }),
          style({ left: '400px', top: '100px', offset: 1 })
        ]))),
        transition('true => false', animate('1000ms linear', keyframes([
          style({ left: '400px', top: '100px', offset: 0 }),
          style({ left: '200px', top: '50px', offset: 0.50 }),
          style({ left: '0', top: '100px', offset: 1 })
        ])))
      ]),
    animeTrigger: trigger('animeTrigger', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        animate(700, keyframes([
          style({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(25px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
        ]))
      ])
    ])
  }