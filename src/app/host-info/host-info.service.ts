import { Injectable } from '@angular/core';
import { Host } from '../core/host'
import { Os } from '../core/os.enum'

@Injectable()
export class HostInfoService {

  constructor() { }

  getHosts() : Host[] {
    let hosts : Host[];
    hosts = [];
    hosts.push({ id:1, hostName:"Leveno", os : Os.Windows });
    hosts.push({ id:2, hostName:"DELL", os : Os.Windows });
    hosts.push({ id:3, hostName:"Redhat", os : Os.Linux });
    hosts.push({ id:4, hostName:"iPhone8", os : Os.iOS });
    hosts.push({ id:5, hostName:"Galaxy", os : Os.Android });
    hosts.push({ id:6, hostName:"Mate 10", os : Os.Android });
    hosts.push({ id:7, hostName:"ZOS", os : Os.Mainframe });
    return hosts;
  }

}
