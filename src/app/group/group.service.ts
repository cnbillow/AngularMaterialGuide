import { Injectable } from '@angular/core';

import { Group } from '../core/group';

@Injectable()
export class GroupService {

  constructor() { }


  getGroups() : Group[] {
    let groups =  [
      {id : 1, name :"Group01", hosts : [] },
      {id : 2, name :"Group02", hosts : [] },
      {id : 3, name :"Group03", hosts : [] },
      {id : 4, name :"Group04", hosts : [] },
    ];

    return groups;
  }

}
