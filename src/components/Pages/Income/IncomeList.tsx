import * as React from 'react';
import {GUID} from 'xtypescript';
import {state} from '../../../shared';
import {MarkerModel} from '../../../models';
import {IncomeItem} from './IncomeItem';
import {IocComponent} from '../../common';

export class IncomeList extends IocComponent<MarkerModel[], {}> {

  render() {

    let availableList = [new MarkerModel(null, null)];
    let deletedList = [];

    this
      .props
      .data
      .forEach(x => {
        if (x.isDeleted) 
          deletedList.push(x);
        else 
          availableList.push(x);
        }
      );

    let availableItems = availableList.map(x => <IncomeItem ioc={this.props.ioc} data={x} key={x.id}/>);
    let deletedItems = deletedList.map(x => <IncomeItem ioc={this.props.ioc} data={x} key={x.id}/>);

    return (
      <div className="container-fluid row-list">
        {availableItems}
        {deletedItems}
      </div>
    );
  }
}
