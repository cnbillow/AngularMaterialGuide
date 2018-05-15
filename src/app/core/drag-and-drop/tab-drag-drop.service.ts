import { Injectable } from '@angular/core';

import { DragDropServiceBase } from './drag-drop-service-base'


@Injectable()
export class TabDragDropService extends DragDropServiceBase {

  constructor() { 
    super();
  }


  // private zone : string[] = [];

  // constructor() { }

  // set zoneNames(zone : string | string[]) {
  //   if(typeof zone === "string") {
  //     this.zone = [];
  //     this.zone.push(zone);
  //   } else if (zone.length){
  //     this.zone = zone;
  //   }   
    
  // }

  // // get zoneNames() : string | string[]{
  // //   return this.zone;
  // // }

  // allowDrop(orientedzone : string) {
  //   let allow : boolean = false; 
  //   if(orientedzone) {
  //     allow = this.zone.some( z => z === orientedzone);
  //   }
  //   return allow;
  // }
}
