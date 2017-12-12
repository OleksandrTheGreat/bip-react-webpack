import * as React from 'react';
import {state, bus} from '../../../shared';
import {GoBack, Ask} from '../../../shared/commands';

export class Header extends React.Component {

  constructor() {
    super();
    this.onBackClick = this.onBackClick.bind(this);
  }

  onBackClick() {

    if (state.page.isDirty)
    {
      bus.SendAsync(new Ask(
        state.i18n.common.goBackQuestion,
        (answer) => {
          if (answer)
            bus.SendAsync(new GoBack());
        }
      ));
      return;
    }

    bus.SendAsync(new GoBack());
  }

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
