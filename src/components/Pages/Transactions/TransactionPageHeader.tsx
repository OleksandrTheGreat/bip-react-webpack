import * as React from 'react';
import {state} from '../../../shared';

export class TransactionPageHeader extends React.Component {

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
              onClick={() => alert('Not implemented yet')}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
