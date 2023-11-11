import { Component } from '@angular/core';
import { NavInteropService } from 'src/app/services/nav-interop.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(private nav:NavInteropService) {}

    toggleNav() {
        this.nav.toggleMenu();
    }
}
