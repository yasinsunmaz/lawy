import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  //TODO: Custom Directive Kullanımı
  @Input() appColor: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.color = this.appColor;
  }
}
