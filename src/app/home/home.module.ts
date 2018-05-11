import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatTabsModule, MatDividerModule } from '@angular/material';

import { HomeService } from './home.service';
import { TabDraggabledDirective } from '../core/tab-draggabled.directive';
import { TabDroppabledDirective } from '../core/tab-droppabled.directive';
import { TabDragDropService } from '../core/tab-drag-drop.service';

@NgModule({
  imports: [
    MatTabsModule,
    MatDividerModule,
    CommonModule,
   
  ],
  exports:[
    MatTabsModule,
    MatDividerModule,
    HomeComponent,
   
  ],
  declarations: [
    HomeComponent,
    TabDraggabledDirective,
    TabDroppabledDirective,
  ],
  providers : [
    HomeService,TabDragDropService
  ]
})
export class HomeModule { }
