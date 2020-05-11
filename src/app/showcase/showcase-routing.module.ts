import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcaseComponent} from './showcase/showcase.component';
import { ShowcaseHomeComponent} from './showcase-home/showcase-home.component';
import {ShowcaseCustomersComponent} from './showcase-customers/showcase-customers.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseComponent,
    children: [
      { path: 'home', component: ShowcaseHomeComponent },
      { path: 'customers', component: ShowcaseCustomersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseRoutingModule { }
