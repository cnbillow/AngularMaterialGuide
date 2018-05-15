import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlDraggabledDirective } from './control-draggabled.directive';
import { ControlDroppabledDirective } from './control-droppabled.directive';
import { TabDraggabledDirective } from './tab-draggabled.directive';
import { TabDroppabledDirective } from './tab-droppabled.directive';

import { ControlDragDropService } from './control-drag-drop.service';
import { TabDragDropService } from './tab-drag-drop.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ControlDraggabledDirective,
    ControlDroppabledDirective,
    TabDraggabledDirective,
    TabDroppabledDirective,
  ],
  declarations: [
    ControlDraggabledDirective,
    ControlDroppabledDirective,
    TabDraggabledDirective,
    TabDroppabledDirective,
  ],
  providers: [ 
    ControlDragDropService,
    TabDragDropService,
  ]
})
export class DragAndDropModule { }
