import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';


export const routes: Routes = [{
    path:"",
    component:DashboardComponent,
    children:[{
        path:"add",
        component:AddComponent
    },{
        path:"search",
        component:SearchComponent
    }]
}];
