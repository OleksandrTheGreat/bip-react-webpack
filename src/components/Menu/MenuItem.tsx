import * as React from 'react';

export class MenuItem extends React.Component < {
  title : string,
  onClick : (e : any) => any,
  isActive : boolean
} > {
  render() {

    let className = 'nav-link' + (this.props.isActive
      ? ' active'
      : '');

    let classNameSm = className + ' visible-sm';
    let classNameLg = className + ' hidden-sm';

    return (
      <li>
        <a 
          href="#" 
          className={classNameLg} 
          onClick={this.props.onClick}
        >
          {this.props.title}
        </a>

        <a 
          href="#" 
          className={classNameSm} 
          onClick={this.props.onClick}
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          {this.props.title}
        </a>
      </li>
    );
  }
}
