import * as React from 'react';
import pnp from 'sp-pnp-js';

import { IApiProps } from './IApiProps';
import { IApiState } from './IApiState';
import { ICommiListItem } from './ICommiListItem';


export class Api extends React.Component<IApiProps, IApiState> {

    public render(): React.ReactElement<IApiProps> {
        return (
            <div>
                
            </div>
        );
    }

    public getCommiItem(): void {
        // run mongod
        // run python
        // run the file in C:/pythonstuff
        // this estabishes a connection to http://127.0.0.1:5000/commission
        // to change this, review the file at C:/pythonstuff/settings.py 
    }
    public createCommiItem(commiItem: ICommiListItem): void {
        pnp.sp.web.lists.getByTitle(this.props.listTitle).items.add({
            Title: commiItem.title,
            commiTotalMembers: commiItem.commiTotalMembers,
            commiDesc: commiItem.commiDesc,
            commiTerm: commiItem.commiTerm,
            commiMberCommt: commiItem.commiMberCommt,
            commiCityStaff1: commiItem.commiCityStaff1
        }).then(r => {
            console.log(r);
        });
    }
}