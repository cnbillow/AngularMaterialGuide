import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

import { GroupService } from './group.service';
import { GroupComponent } from './group.component';
import { HostInfoService } from '../host-info/host-info.service';

import { DragAndDropModule } from '../core/drag-and-drop/drag-and-drop.module';
// import { ControlDraggabledDirective } from '../core/control-draggabled.directive';
// import { ControlDroppabledDirective } from '../core/control-droppabled.directive';

// import { ControlDragDropService } from '../core/control-drag-drop.service';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,

    DragAndDropModule,
    // ControlDraggabledDirective,
    // ControlDroppabledDirective,
  ],
  exports: [
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    GroupComponent,
    // ControlDraggabledDirective,
    // ControlDroppabledDirective,

  ],
  declarations: [
    GroupComponent,
    // ControlDraggabledDirective,
    // ControlDroppabledDirective,
  ],
  providers: [
    GroupService,
    HostInfoService,
    // ControlDragDropService,
  ],
})
export class GroupModule { }
