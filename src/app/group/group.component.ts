import { Component, OnInit } from '@angular/core';

import { GroupService } from './group.service';
import { HostInfoService } from '../host-info/host-info.service';
import { Group } from '../core/group';
import { Host } from '../core/host';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groups : any[];
  hosts : any[];

  constructor(private service : GroupService, 
    private hostService : HostInfoService) { }

  ngOnInit() {
    this.groups = this.service.getGroups();
    this.hosts = this.hostService.getHosts();
  }

  addHostInGroup(event : any) {
    let dragData = event.dragData;
    let dropData = event.dropData;

    if(dragData && dropData) {

      //dropData.hosts.push(dragData as Host);
      if(!dropData.hosts) {
        dropData.hosts = [];
      }
      dropData.hosts.push(dragData as Host);


      console.log(dropData);
      //console.log(dropData);
    }

   
  }

}
