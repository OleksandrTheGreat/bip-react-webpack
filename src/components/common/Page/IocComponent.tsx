import * as React from 'react';
import {IOCContainer} from 'ioc';
import {ABus} from 'abus';
import {IocComponent} from '..';
import {GoBack} from '../../../bus/commands';

export abstract class IocPage<TProps, TState> extends IocComponent<TProps, TState> {
  
  constructor(props){
    super(props);

    this.onBack = this.onBack.bind(this); 
  }

  protected onBack() {
    this._bus.SendAsync(new GoBack());
  }
}

