import * as React from 'react';
import {IOCContainer} from 'ioc';
import {ABus} from 'abus';

export abstract class IocComponent<TProps, TState> extends React.Component <
  {ioc: IOCContainer, data?: TProps}, {data: TState}
> {
  
  protected _bus: ABus;

  constructor(props){
    super(props);

    this._bus = this.props.ioc.resolve<ABus>(ABus);
  }
}

