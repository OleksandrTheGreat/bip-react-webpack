import * as React from 'react';
import {IOCContainer} from 'ioc';
import {ABus} from 'abus';

export abstract class IocPage<T> extends React.Component<{ioc: IOCContainer, data?: T}, {data?: T}> {

  protected _bus: ABus;

  constructor(props){
    super(props);

    this._bus = this.props.ioc.resolve<ABus>(ABus);
  }
}

