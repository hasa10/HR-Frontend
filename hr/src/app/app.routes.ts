import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';


export const routes: Routes = [{
    path:"",
    component:DashboardComponent,
    children:[{
        path:"add",
        component:AddComponent
    }]
}];
