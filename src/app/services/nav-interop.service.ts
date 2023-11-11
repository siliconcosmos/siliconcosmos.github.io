import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavInteropService {

    private _toggleMenuEvent:Subject<void> = new Subject<void>();

    public onToggleMenu(listener:() => void):Subscription {
        return this._toggleMenuEvent.subscribe(() => listener());
    }

    public toggleMenu() {
        this._toggleMenuEvent.next();
    }

}
