import * as React from 'react';
import {state, bus} from '../../../shared';
import {SaveState} from '../../../bus/commands/index';

export class FormPage extends React.Component <{data: any}, {data: any}> {

  constructor(props) {
    super(props);

    this.state = {
      data: state.page.isDirty ? state.page.data : this.props.data
    };

    this.onChange = this.onChange.bind(this);
  }

  public onChange(name : string, value : any) {
    
    state.page.isDirty = true;

    let data = this.state.data;
    data[name] = value;

    state.page.data = data;
    
    bus.SendAsync(new SaveState());

    this.setState({data: data});
  }
}