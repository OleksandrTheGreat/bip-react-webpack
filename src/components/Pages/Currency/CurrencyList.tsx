import * as React from 'react';
import {CurrencyItem} from './CurrencyItem';
import {state} from '../../../shared';
import {CurrencyModel} from '../../../models';

export class CurrencyList extends React.Component<{list: CurrencyModel[]}> {

  render() {

    let availableCurrency = [
      new CurrencyModel(null, null)      
    ];

    let deletedCurrency = [];

    this.props.list.forEach(x => {
      if (x.isDeleted)
        deletedCurrency.push(x);
      else
        availableCurrency.push(x);
    });

    let availableItems = availableCurrency.map(x => <CurrencyItem currency={x} key={x.id}/>);
    let deletedItems = deletedCurrency.map(x => <CurrencyItem currency={x} key={x.id}/>);

    return (
      <div className="container-fluid row-list">
        {availableItems}
        {deletedItems}
      </div>
    );
  }
}
