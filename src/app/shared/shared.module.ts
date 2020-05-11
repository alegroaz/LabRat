import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar';

import { HeaderComponent } from './navbars/header.component';
import { FooterComponent } from './navbars/footer.component';




@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  bootstrap: [HeaderComponent]
})
export class SharedModule { }
