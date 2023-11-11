import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent } // wildcard path when the path given is not found
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
