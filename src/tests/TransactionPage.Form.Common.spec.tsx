import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import {TransactionPage} from "../components/Pages/Transaction/TransactionPage";
import {TransactionFormModel} from '../models/TransactionFormModel';
import {IOCContainer} from 'ioc';
import {ABus} from 'abus';

const ioc = new IOCContainer();
const bus = new ABus();
ioc.register<ABus>(ABus, () => bus);

export const itShouldRender = (data: TransactionFormModel, should: string, findTitle: string) => {
  it(should, () => {

    const renderer = TestRenderer.create(
      <TransactionPage ioc={ioc} data={data} />
    );

    const root = renderer.root;
    const fieldLabel = root.findByProps({title: findTitle});

    expect(fieldLabel).toBeDefined();
  });
};

export const itShouldNotRender = (data: TransactionFormModel, shouldNot: string, findTitle: string) => {
  it(shouldNot, () => {

    const renderer = TestRenderer.create(
      <TransactionPage ioc={ioc} data={data} />
    );

    const root = renderer.root;
    const fieldLabelDelegate = () => root.findByProps({title: findTitle});

    expect(fieldLabelDelegate).toThrowError();
  });
};
