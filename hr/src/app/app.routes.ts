import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { AllComponent } from './all/all.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';


export const routes: Routes = [{
    path: "",
    component: DashboardComponent,
    children: [{
        path: "add",
        component: AddComponent
    }, {
        path: "search",
        component: SearchComponent
    }, {
        path: "all",
        component: AllComponent
    }, {
        path: "delete",
        component: DeleteComponent
    }, {
        path: "update",
        component: UpdateComponent
    }]
}];
