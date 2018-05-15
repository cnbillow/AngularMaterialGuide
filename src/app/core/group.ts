import { Host } from './host';

export class Group {
    id : number;
    name : string;
    hosts? : Host | Host[];
}
