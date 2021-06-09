import { BaseProvider } from '@ethersproject/providers';
export interface Call {
    contract: {
        address: string;
    };
    name: string;
    inputs: any[];
    outputs: any[];
    params: any[];
}
export declare function all(calls: Call[], multicallAddress: string, provider: BaseProvider): Promise<any[]>;
