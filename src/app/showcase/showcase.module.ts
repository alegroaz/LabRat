import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseComponent} from './showcase/showcase.component';
import { ShowcaseHomeComponent } from './showcase-home/showcase-home.component';
import { ShowcaseCustomersComponent } from './showcase-customers/showcase-customers.component';


import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseNavbarComponent } from './showcase-navbar/showcase-navbar.component';
import { ShowcaseFooterComponent } from './showcase-footer/showcase-footer.component';


@NgModule({
  declarations: [
    ShowcaseComponent,
    ShowcaseHomeComponent,
    ShowcaseCustomersComponent,
    ShowcaseNavbarComponent,
    ShowcaseFooterComponent
  ],
  imports: [
    CommonModule,
    ShowcaseRoutingModule
  ],
  exports: [
  ]
})
export class ShowcaseModule { }
