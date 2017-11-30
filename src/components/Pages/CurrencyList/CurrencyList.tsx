import * as React from 'react';
import {Currency} from '../../../domain';
import {CurrencyItem} from './CurrencyItem';

export class CurrencyList extends React.Component<{list: Currency[]}> {

  render() {
    let items = this.props.list.map(x => <CurrencyItem currency={x} key={x.id}/>);
    
    return (
      <div className="container-fluid row-list">
        {items}
      </div>
    );
  }
}
