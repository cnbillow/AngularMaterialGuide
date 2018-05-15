import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule, } from '@angular/material';

import { HostInfoComponent } from './host-info.component';
import { HostInfoService } from './host-info.service';

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
  ],
  providers: [ HostInfoService ], //  Angular 内部のコンテナからの注入
})
export class HostInfoModule { }
