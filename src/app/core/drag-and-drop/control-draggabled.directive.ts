import { Directive, ElementRef, Input } from '@angular/core';

import { ControlDragDropService } from './control-drag-drop.service';
import { DraggabledDirectiveBase } from './draggabled-directive-base';

@Directive({
  selector: '[controlDraggabled]'
})
export class ControlDraggabledDirective extends DraggabledDirectiveBase {

  constructor(private element: ElementRef, private service : ControlDragDropService) { 
    super(element, service);
  }

  @Input("controlDraggabled") set dragTabData(data : any) {
    this.dragData = data;
  }

}
