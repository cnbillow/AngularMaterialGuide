import { Os } from './os.enum'
export class Host {
    id : number;
    hostName : string;
    group? : string;
    os : Os;
}
