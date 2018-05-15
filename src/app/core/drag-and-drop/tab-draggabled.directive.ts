import { Directive , ElementRef, HostListener, Input} from '@angular/core';

import { TabDragDropService } from './tab-drag-drop.service';
import { DragDropServiceBase } from './drag-drop-service-base';
import { DraggabledDirectiveBase } from './draggabled-directive-base';


@Directive({
  selector: '[tabDraggabled]',
 // providers: [ TabDragDropService ]
})
export class TabDraggabledDirective extends DraggabledDirectiveBase{

  constructor(private element: ElementRef, private service : TabDragDropService) { 
      super(element, service);
  }

  @Input("tabDraggabled") set dragTabData(data : any) {
    this.dragData = data;
  }

  // private targetzones : string | string[];
 
  // constructor(private element: ElementRef, private service : TabDragDropService) { 
  //   this.element.nativeElement.draggable = true;
  // }

  // @Input("tabDraggabled") dragData : any;

  // @Input("tagetZones") 
  // set tabTagetZones(zones : string | string[]) {
  //   this.targetzones = zones;
  // }

  // @HostListener("dragstart", ['$event']) onDragStart(event : DragEvent){
  //   //console.log(this.dragData || "onDragStart In Directive");

  //  // const zones :string | string[] =this.targetzones ;
  //   this.service.zoneNames = this.targetzones ;  
  //   event.dataTransfer.setData("text", JSON.stringify(this.dragData));
  // }

  // @HostListener("dragover", ['$event']) onDragOver(event : DragEvent){
  //   //console.log(this.dragData || "onDragStart In Directive")
  //   event.preventDefault();
  // }
  

}
