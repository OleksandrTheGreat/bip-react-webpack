import * as React from 'react';
import {state, bus} from '../../../shared';
import {SaveState} from '../../../bus/commands';

export abstract class FormPage<T> extends React.Component <{data: T}, {data: T}> {

  constructor(props) {
    super(props);

    this.state = {
      data: state.page.isDirty ? state.page.data : this.props.data
    };

    this.onChange = this.onChange.bind(this);
  }

  public onChange(delegate: (data: T) => void) {

    state.page.isDirty = true;

    let data = this.state.data;
    delegate(data);

    state.page.data = data;
    
    bus.SendAsync(new SaveState());

    this.setState({data: data});
  }
}