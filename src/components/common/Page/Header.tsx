import * as React from 'react';
import {state, bus} from '../../../shared';
import {Ask} from '../../../bus/commands';
import {Oprerations} from '../../../shared/operations';

export class Header extends React.Component {
  render() {
    return (
      <div className='container-fluid page-header'>
        <div className='row'>
          <div className='col'>
            <h5>{this.props.children}</h5>
          </div>
          <div className="col-2 col-md-auto">
            <button 
              type="button" 
              className="btn btn-primary"
              title={state.i18n.common.back}
              onClick={Oprerations.goBack}
            >
              <i className="fa fa-reply"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
