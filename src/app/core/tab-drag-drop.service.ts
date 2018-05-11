import { Injectable } from '@angular/core';



@Injectable()
export class TabDragDropService {

  private zone : string[] = [];

  constructor() { }

  set zoneNames(zone : string | string[]) {
    if(typeof zone === "string") {
      this.zone = [];
      this.zone.push(zone);
    } else if (zone.length){
      this.zone = zone;
    }   
    
  }

  // get zoneNames() : string | string[]{
  //   return this.zone;
  // }

  allowDrop(orientedzone : string) {
    let allow : boolean = false; 
    if(orientedzone) {
      allow = this.zone.some( z => z === orientedzone);

      //console.log(this.zone);
      //console.log(`${this.zone[0]} == ${orientedzone}`);
    }
    return allow;
  }
}
