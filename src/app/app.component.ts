import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavInteropService } from './services/nav-interop.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'siliconcosmos';
    public navOpen:boolean = false;

    private _subscriptions:Subscription = new Subscription();

    constructor(private navInterop:NavInteropService) {}

    ngOnInit(): void {
        this._subscriptions.add(this.navInterop.onToggleMenu(() => {
            this.navOpen = !this.navOpen;
        }));
    }

    ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
    }
}
