import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[contained], button[text], button[outlined], button:not(.btn)',
})
export class MainButtonDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    if (this.el.nativeElement.hasAttribute('contained')) {
      this.render.addClass(this.el.nativeElement, 'contained-button');
    }
    if (this.el.nativeElement.hasAttribute('text')) {
      this.render.addClass(this.el.nativeElement, 'text-button');
    }
    if (this.el.nativeElement.hasAttribute('outlined')) {
      this.render.addClass(this.el.nativeElement, 'outlined-button');
    }
  }
}
