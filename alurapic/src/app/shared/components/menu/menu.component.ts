import { Component } from '@angular/core';

@Component({
    selector: 'ap-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent {

    private isShown = false;

    toggle() {
        this.isShown = !this.isShown;
    }
}