import * as React from 'react';
import {ABus} from 'abus';
import {state, ioc, pages} from '../../../shared';
import {ChangePage} from '../../../bus/commands/index';
import { TransactionFormModel } from '../../../models/TransactionFormModel';

export class TransactionListPageHeader extends React.Component {

  private _bus = ioc.resolve<ABus>(ABus);

  render() {
    return (
      <div className='container-fluid page-header'>
        <div className='row'>
          <div className='col'>
            <h5>{state.i18n.transactions.title}</h5>
          </div>
          <div className="col-2 col-md-auto">
            <button 
              type="button" 
              className="btn btn-primary"
              title={state.i18n.transactions.create}
              onClick={() => this._bus.SendAsync(new ChangePage(pages.TransactionPage.name))}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
