import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatSidenavModule, } from '@angular/material';

import { SideMenuComponent } from './side-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatIconModule, MatSidenavModule,
  ],
  exports:[
    MatButtonModule, MatIconModule, MatSidenavModule,
  ],
  declarations: [
    
  ]
})
export class SideMenuModule { }
