import * as React from 'react';

export class SettingsItem extends React.Component<
{
  title: string,
  icon: string
}> {

  render() {
    return (
      <div className="row">
        <div className="col">
          <i className={"fa settings-icon " + this.props.icon}></i> {this.props.title}
        </div>
        <div className="col text-right">
          <button type="button" className="btn btn-primary"> 
            <i className="fa fa-pencil"></i>
          </button>
        </div>
      </div>
    );
  }
}
