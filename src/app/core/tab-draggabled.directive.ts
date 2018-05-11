import { Directive , ElementRef, HostListener, Input} from '@angular/core';

import { TabDragDropService } from './tab-drag-drop.service';

@Directive({
  selector: '[tabDraggabled]',
 // providers: [ TabDragDropService ]
})
export class TabDraggabledDirective {


  private targetzones : string | string[];
 
  constructor(private element: ElementRef, private service : TabDragDropService) { 
    this.element.nativeElement.draggable = true;
  }

  @Input("tabDraggabled") dragData : any;

  @Input("tagetZones") 
  set tabTagetZones(zones : string | string[]) {
    this.targetzones = zones;
  }

  @HostListener("dragstart", ['$event']) onDragStart(event : DragEvent){
    //console.log(this.dragData || "onDragStart In Directive");

   // const zones :string | string[] =this.targetzones ;
    this.service.zoneNames = this.targetzones ;  
    event.dataTransfer.setData("text", JSON.stringify(this.dragData));
  }

  // @HostListener("dragover", ['$event']) onDragOver(event : DragEvent){
  //   //console.log(this.dragData || "onDragStart In Directive")
  //   event.preventDefault();
  // }
  

}
