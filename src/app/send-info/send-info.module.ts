import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendInfoComponent } from './send-info.component';

// import { ControlDraggabledDirective } from '../core/control-draggabled.directive';
// import { ControlDroppabledDirective } from '../core/control-droppabled.directive';

import { GroupModule } from '../group/group.module';
import { DragAndDropModule } from '../core/drag-and-drop/drag-and-drop.module';

// import { ControlDragDropService } from '../core/control-drag-drop.service';

@NgModule({
  imports: [
    CommonModule,
    DragAndDropModule,
    GroupModule,

  ],
  declarations: [
    SendInfoComponent,
   // ControlDraggabledDirective,
   // ControlDroppabledDirective,
  ],
  providers: [
    //ControlDragDropService,
  ]
})
export class SendInfoModule { }
