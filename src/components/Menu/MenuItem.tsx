import * as React from 'react';

export class MenuItem extends React.Component < {
  title : string,
  onClick : (e : any) => any,
  isActive : boolean
} > {
  render() {

    let className = "nav-link" + (this.props.isActive
      ? " active"
      : "");

    return (
      <li>
        <a href="#" className={className} onClick={this.props.onClick}>
          {this.props.title}
        </a>
      </li>
    );
  }
}
