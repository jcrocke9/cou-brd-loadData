import * as React from 'react';
import styles from './LoadData.module.scss';
import { ILoadDataProps } from './ILoadDataProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { Api } from './Api';

export default class LoadData extends React.Component<ILoadDataProps, {}> {
  public render(): React.ReactElement<ILoadDataProps> {
    return (
      <div className={ styles.loadData }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Load Data into the system!</span>
              <p className={ styles.subTitle }>Built by Joe Crockett on 1/5/2018 for Boards &amp; Commissions.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              {/**<a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span></a>*/}
              <Api listTitle={this.props.listTitle}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
