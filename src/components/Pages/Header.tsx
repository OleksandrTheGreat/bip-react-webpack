import * as React from 'react';
import {state, bus} from '../../shared';
import {ChangePage} from '../../shared/commands';

export class Header extends React.Component {

  constructor() {
    super();
    this.onBackClick = this.onBackClick.bind(this);
  }

  onBackClick() {
    bus.SendAsync(new ChangePage(state.page.previous));
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <h6>{this.props.children}</h6>
          </div>
          <div className="col-3 text-right">
            <button 
              type="button" 
              className="btn btn-primary"
              title={state.i18n.common.back}
              onClick={this.onBackClick}
            >
              <i className="fa fa-reply"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}