import { Directive, ElementRef, Input } from '@angular/core';

import { ControlDragDropService } from './control-drag-drop.service';
import { DroppabledDirectiveBase } from './droppabled-directive-base';

@Directive({
  selector: '[controlDroppabled]'
})
export class ControlDroppabledDirective extends DroppabledDirectiveBase {

  constructor(private element: ElementRef, 
    private service : ControlDragDropService) {
        super(element, service);
  }

  @Input("controlDroppabled") set dropTabData(data: any) {
    this.dropData = data;
  }

}
