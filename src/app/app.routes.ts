import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
export const routes: Routes = [

    {
        path:"",
        component:AppComponent,
    },
    {
        path:"?i=1",
         redirectTo:"",
         pathMatch:"full"
    },
    {
        path:"**",
        redirectTo:""
    }
];
