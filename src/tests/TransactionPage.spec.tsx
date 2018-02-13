import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import {TransactionPage} from "../components/Pages/Transaction/TransactionPage";
import {MarkerModel, AccountModel} from "../models";
import {TransactionFormModel} from '../models/TransactionFormModel';
import {TransactionModel} from '../models/TransactionModel';
import {state, ioc} from '../shared';
import { Header } from '../components/common/Page/Header';

describe('Transaction Page', () => {

  it('should render', () => {

    let data: TransactionFormModel = {
      transaction: new TransactionModel(),
      accountList: [
        new AccountModel('0', '1', 0, '0', '0', 0, '', 0, false, false)
      ],
      incomeList: [
        new MarkerModel('0', 'Income'),
      ],
      expenseList: [
        new MarkerModel('1', 'Expense'),
      ]
    };

    const renderer = TestRenderer.create(
      <TransactionPage data={data} />
    );

    const root = renderer.root;

    const header = root.findByType(Header);

    expect(header).toBeDefined();
  });
});
