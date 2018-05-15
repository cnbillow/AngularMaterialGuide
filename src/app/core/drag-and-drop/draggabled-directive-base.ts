import { ElementRef, HostListener, Input} from '@angular/core';
import { DragDropServiceBase } from './drag-drop-service-base';

export class DraggabledDirectiveBase {
    private targetzones : string | string[];

    constructor(private elementBase: ElementRef, private serviceBase : DragDropServiceBase) {
        this.elementBase.nativeElement.draggable = true;
    }

    @Input() dragData : any;

    @Input("tagetZones") 
    set tabTagetZones(zones : string | string[]) {
      this.targetzones = zones;
    }
  
    @HostListener("dragstart", ['$event']) onDragStart(event : DragEvent) {
 
      this.serviceBase.zoneNames = this.targetzones ;  
     
      if(this.dragData) {
        event.dataTransfer.setData("text", JSON.stringify(this.dragData));
      }
      //console.log("Base Drag Start");
    }
}
