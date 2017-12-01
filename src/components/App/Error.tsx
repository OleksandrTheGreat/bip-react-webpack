import * as React from 'react';

export class Error extends React.Component<{error: any, info: any}> {

  render() {
    
    return (
      <div>
        <div>{this.props.error}</div>
        <div>{this.props.info}</div>
      </div>);
  }
}
