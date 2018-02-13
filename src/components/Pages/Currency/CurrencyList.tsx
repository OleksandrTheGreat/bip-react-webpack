import * as React from 'react';
import {CurrencyItem} from './CurrencyItem';
import {state} from '../../../shared';
import {CurrencyModel} from '../../../models';
import {IocComponent} from '../../common';

export class CurrencyList extends IocComponent<CurrencyModel[], {}> {

  render() {

    let availableCurrency = [
      new CurrencyModel(null, null)      
    ];

    let deletedCurrency = [];

    this.props.data.forEach(x => {
      if (x.isDeleted)
        deletedCurrency.push(x);
      else
        availableCurrency.push(x);
    });

    let availableItems = availableCurrency.map(x => <CurrencyItem ioc={this.props.ioc} data={x} key={x.id}/>);
    let deletedItems = deletedCurrency.map(x => <CurrencyItem ioc={this.props.ioc} data={x} key={x.id}/>);

    return (
      <div className="container-fluid row-list">
        {availableItems}
        {deletedItems}
      </div>
    );
  }
}
