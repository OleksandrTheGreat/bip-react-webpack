import * as React from 'react';
import {CurrencyItem} from './CurrencyItem';
import {GUID} from 'xtypescript';
import {state} from '../../../shared';
import { CurrencyModel } from '../../../models';

export class CurrencyList extends React.Component<{list: CurrencyModel[]}> {

  render() {

    let list = [
      new CurrencyModel(null, null),
      ...this.props.list
    ];

    let items = list.map(x => <CurrencyItem currency={x} key={x.id}/>);
    
    return (
      <div className="container-fluid row-list">
        {items}
      </div>
    );
  }
}
