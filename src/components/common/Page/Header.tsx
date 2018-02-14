import * as React from 'react';
import {state} from '../../../shared';
import {Ask} from '../../../bus/commands';

export class Header extends React.Component<{onBack: () => void}> {

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
              onClick={this.props.onBack}
            >
              <i className="fa fa-arrow-left"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
