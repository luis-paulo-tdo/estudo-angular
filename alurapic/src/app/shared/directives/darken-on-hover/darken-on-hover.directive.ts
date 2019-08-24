import { ElementRef, HostListener, Renderer, Directive, Input } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    @Input() brightness = '70%';

    constructor(
        private el: ElementRef,
        private renderer: Renderer
    ) { }

    @HostListener('mouseover')
    darkenOn() {
        this.renderer.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOff() {
        this.renderer.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}
