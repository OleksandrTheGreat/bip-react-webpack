import * as React from 'react';

export class FormField extends React.Component < {
  title: string,
  className?: string
} > {
  render() {

    const className = this.props.className
      ? 'col ' + this.props.className
      : 'col';

    return (
      <div className="row">
        <div className="col">
          <label>{this.props.title}</label>
        </div>
        <div className={className}>
          {this.props.children}
        </div>
      </div>
    );
  }
}