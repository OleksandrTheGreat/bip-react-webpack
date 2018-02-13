import * as React from 'react';
import {GUID} from 'xtypescript';
import {state} from '../../../shared';
import {MarkerModel} from '../../../models';
import {ExpenseItem} from './ExpenseItem';
import {IocComponent} from '../../common';

export class ExpenseList extends IocComponent<MarkerModel[], {}> {

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

    let availableItems = availableList.map(x => <ExpenseItem ioc={this.props.ioc} data={x} key={x.id}/>);
    let deletedItems = deletedList.map(x => <ExpenseItem ioc={this.props.ioc} data={x} key={x.id}/>);

    return (
      <div className="container-fluid row-list">
        {availableItems}
        {deletedItems}
      </div>
    );
  }
}
