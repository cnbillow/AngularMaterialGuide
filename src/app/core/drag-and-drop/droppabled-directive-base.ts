import { ElementRef, HostListener, Input, Output, EventEmitter} from '@angular/core';
import { DragDropServiceBase } from './drag-drop-service-base';


export class DroppabledDirectiveBase {

    private zoneName : string;

    constructor(private elementBase: ElementRef, 
        private serviceBase : DragDropServiceBase) {

         }
  
    @Output("onDrop") drop : EventEmitter<any> = new EventEmitter();
  
    @Input() dropData : any;
   
    @Input("zoneName")
    set dropZoneName(zone: string) {
      this.zoneName = zone;
    }
  
    @HostListener("dragover", ['$event']) 
    @HostListener("dragenter", ['$event'])onDragOver(event : DragEvent){
      //console.log(this.dragData || "onDragStart In Directive")
  
      //console.log(this.service.zoneNames);
  
      //const zonename : string = this.zoneName;
  
      if(this.serviceBase.allowDrop(this.zoneName)) {
        event.preventDefault();
      }
    }
    
  
    @HostListener("drop", ['$event']) onDrop(event : DragEvent){    
      event.stopPropagation();
      var dragdata = JSON.parse( event.dataTransfer.getData("text") );
      //console.log(event);
     // console.log( this.dropData);
      this.drop.emit({ "dragData" : dragdata, "dropData" : this.dropData });
    }
  

}


