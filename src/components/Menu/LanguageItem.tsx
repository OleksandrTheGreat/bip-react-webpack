import * as React from 'react';

export class LanguageItem extends React.Component<{onClick: any, title: any},{}> {
  render() {
    return (
      <a 
        href="#" 
        onClick={this.props.onClick}
        className="language-item"
      >
        {this.props.title}
      </a>
    );
  }
}