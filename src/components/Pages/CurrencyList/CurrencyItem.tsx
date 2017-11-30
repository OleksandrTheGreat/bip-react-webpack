import * as React from 'react';
import {Currency} from '../../../domain';

export class CurrencyItem extends React.Component<{currency: Currency}> {

  render() {
    return (
      <div className="row">
        <div className="col">
          {this.props.currency.name}
          <div>
            <small>
              {this.props.currency.description}
            </small>
          </div>
        </div>
        <div className="col-3 text-right">
          <button 
            type="button"
            className="btn btn-primary"
          >
            <i className="fa fa-pencil"></i>
          </button>
        </div>
      </div>
    );
  }
}
