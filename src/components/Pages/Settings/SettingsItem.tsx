import * as React from 'react';

export class SettingsItem extends React.Component<
{
  title: string,
  icon: string,
  onClick: any
}> {
  render() {
    return (
      <div className="row">
        <div className="col col-setting-title">
            <i className={"fa title-icon " + this.props.icon}></i> {this.props.title}
        </div>
        <div className="col text-right">
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={this.props.onClick}
          > 
            <i className="fa fa-pencil"></i>
          </button>
        </div>
      </div>
    );
  }
}
