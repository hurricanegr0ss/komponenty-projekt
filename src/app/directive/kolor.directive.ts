import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appKolor]'
})
export class KolorDirective {

  @Input() appKolor: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.appKolor && this.appKolor > 2015) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightblue');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  }
}
