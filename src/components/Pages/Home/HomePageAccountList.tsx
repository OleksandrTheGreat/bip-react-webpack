import * as React from 'react';
import {state} from '../../../shared';
import {HomePageAccountItem} from './HomePageAccountItem';
import {AccountModel} from '../../../models/AccountModel';

export class HomePageAccountList extends React.Component < {
  list : AccountModel[]
} > {

  render() {

    let items = this.props.list.map(x => <HomePageAccountItem account={x} key={x.id}/>);
    
    return (
      <div className="container-fluid row-list">
        {items}
      </div>
    );
  }
}
