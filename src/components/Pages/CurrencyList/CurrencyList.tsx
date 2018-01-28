import * as React from 'react';
import {Currency} from '../../../domain';
import {CurrencyItem} from './CurrencyItem';
import {GUID} from 'xtypescript';
import {state} from '../../../shared';

export class CurrencyList extends React.Component<{list: Currency[]}> {

  render() {

    let list = [
      new Currency(null, null),
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
