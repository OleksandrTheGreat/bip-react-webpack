import * as React from 'react';
import {ABus} from 'abus';
import {state} from '../../../shared';
import {SaveState} from '../../../bus/commands';
import {IocPage} from '../Page';

export abstract class FormPage<T> extends IocPage<T> {

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
    
    this._bus.SendAsync(new SaveState());

    this.setState({data: data});
  }
}