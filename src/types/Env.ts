import type {Data} from '@/types/Data';

export interface Env {
    id: number,
    name: string,
    data:Data[],
    branch?: Env[]
}
