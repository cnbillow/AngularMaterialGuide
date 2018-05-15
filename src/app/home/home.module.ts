import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatTabsModule, MatDividerModule } from '@angular/material';

import { HomeService } from './home.service';
import { DragAndDropModule } from '../core/drag-and-drop/drag-and-drop.module';

// import { TabDraggabledDirective } from '../core/drag-and-drop/tab-draggabled.directive';
// import { TabDroppabledDirective } from '../core/drag-and-drop/tab-droppabled.directive';
// import { TabDragDropService } from '../core/tab-drag-drop.service';

@NgModule({
  imports: [
    MatTabsModule,
    MatDividerModule,
    CommonModule,
    DragAndDropModule,
    
  ],
  exports:[
    // MatTabsModule,
    // MatDividerModule,
    HomeComponent,
   
  ],
  declarations: [
    HomeComponent,
  ],
  providers : [
    HomeService,
  ]
})
export class HomeModule { }
