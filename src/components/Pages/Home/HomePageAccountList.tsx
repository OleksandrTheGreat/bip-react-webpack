import * as React from 'react';
import {state} from '../../../shared';
import {HomePageAccountItem} from './HomePageAccountItem';
import {AccountModel} from '../../../models/AccountModel';

export class HomePageAccountList extends React.Component < {
  list : AccountModel[]
} > {

  render() {

    let items = [];
    let i = 0;
    let len = this.props.list.length;

    for (i = 0; i < len; i++) 
      items.push(<HomePageAccountItem account={this.props.list[i]}/>);
    
    return (
      <div className="container-fluid">
        {items}
      </div>
    );
  }
}
