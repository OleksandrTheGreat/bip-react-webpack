import * as React from 'react';
import {state} from '../../../shared/index';

export class SettingsItem extends React.Component<
{
  title: string,
  icon: string,
  onClick: any
}> {
  render() {
    return (
      <div className="row">
        <div className="col va-middle">
            <i className={"fa title-icon " + this.props.icon}></i> {this.props.title}
        </div>
        <div className="col-2 col-md-auto">
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={this.props.onClick}
            title={state.i18n.common.open}
          > 
            <i className="fa fa-folder"></i>
          </button>
        </div>
      </div>
    );
  }
}
