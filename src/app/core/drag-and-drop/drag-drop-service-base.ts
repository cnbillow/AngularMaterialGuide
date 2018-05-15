export class DragDropServiceBase {

    private zone : string[] = [];

    constructor() { }

    set zoneNames(zone : string | string[]) {
    if(!zone) {

    }
    else if(typeof zone === "string") {
        this.zone = [];
        this.zone.push(zone);
    } else if (zone.length){
        this.zone = zone;
    }   
    
    }

    allowDrop(orientedzone : string) {
    let allow : boolean = false; 
    if(orientedzone) {
        allow = this.zone.some( z => z === orientedzone);
    } else {
        allow = true;
    }

    return allow;
    }
}
