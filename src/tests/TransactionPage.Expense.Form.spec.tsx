import {MarkerModel, AccountModel} from "../models";
import {TransactionFormModel} from '../models/TransactionFormModel';
import {TransactionModel} from '../models/TransactionModel';
import {state} from '../shared';
import {itShouldRender, itShouldNotRender} from './TransactionPage.Common.Form.spec';

describe('Transaction Page', () => {

  let data: TransactionFormModel = {
    transaction: new TransactionModel(
      null,
      '0',
      null,
      0,
      null,
      null,
      null,
      '1'
    ),
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

  itShouldRender(
    data,
    'should render From Account field on Expense form',
    state.i18n.transaction.fromAccount
  );

  itShouldNotRender(
    data,
    'should not render To Account field on Expense form',
    state.i18n.transaction.toAccount
  );

  itShouldRender(
    data,
    'should render Expense field on Expense form',
    state.i18n.transaction.expense
  );

  itShouldNotRender(
    data,
    'should not render Income field on Expense form',
    state.i18n.transaction.income
  );

  itShouldRender(
    data,
    'should render Sum of expense field on Expense form',
    state.i18n.transaction.sumFrom
  );

  itShouldNotRender(
    data,
    'should not render Sum of income field on Expense form',
    state.i18n.transaction.sumTo
  );
  
  itShouldNotRender(
    data,
    'should not render Rate field on Expense form',
    state.i18n.transaction.rate
  );

  itShouldRender(
    data,
    'should render Description field on Expense form',
    state.i18n.transaction.descriction
  );
});
