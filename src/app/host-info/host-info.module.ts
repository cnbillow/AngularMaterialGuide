import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule, } from '@angular/material';

import { HostInfoComponent } from './host-info.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
  ],
  exports: [
    MatListModule,
  ],
  declarations: [
    HostInfoComponent,
  ]
})
export class HostInfoModule { }
