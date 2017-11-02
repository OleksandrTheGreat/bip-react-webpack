import * as React from 'react';

export class MenuItem extends React.Component < {
  title : string,
  onClick : (e : any) => any
} > {
  render() {
    return (
      <div className="main-menu-item">
        <button type="button" onClick={this.props.onClick}>
          {this.props.title}
        </button>
      </div>
    );
  }
}
