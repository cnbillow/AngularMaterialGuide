import { Directive , ElementRef, HostListener, Input, Output, EventEmitter} from '@angular/core';
//import { EventEmitter } from 'protractor';

import { TabDragDropService } from './tab-drag-drop.service';


@Directive({
  selector: '[tabDroppabled]',
  outputs : ['tabDrop', 'tabDropZone'],
 // providers : [TabDragDropService]
})
export class TabDroppabledDirective {
  
  private zoneName : string;

  constructor(private element: ElementRef, private service : TabDragDropService) { }

  @Output("tabDrop") tabDrop : EventEmitter<any> = new EventEmitter();

  @Input("tabDroppabled") dropData : any;
 
  @Input("zoneName")
  set dropZoneName(zone: string) {
    this.zoneName = zone;
  }

  @HostListener("dragover", ['$event']) onDragOver(event : DragEvent){
    //console.log(this.dragData || "onDragStart In Directive")

    //console.log(this.service.zoneNames);

    //const zonename : string = this.zoneName;

    if(this.service.allowDrop(this.zoneName)) {
      event.preventDefault();
    }
  }
  

  @HostListener("drop", ['$event']) onDrop(event : DragEvent){    
    event.stopPropagation();
    var dragdata = JSON.parse( event.dataTransfer.getData("text") );
    //console.log(event);

    this.tabDrop.emit({ "dragData" : dragdata, "dropData" : this.dropData });
  }

}
