import {state} from '../shared';
import {TransactionFormModel} from '../models/TransactionFormModel';
import {TransactionModel} from '../models/TransactionModel';
import {AccountModel, MarkerModel} from '../models';
import {itShouldRender, itShouldNotRender} from './TransactionPage.Common.Form.spec';

describe('Transaction Income Page', () => {

  let data: TransactionFormModel = {
    transaction: new TransactionModel(
      null,
      null,
      '0',
      null,
      null,
      null,
      null,
      '0'
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

  itShouldNotRender(
    data,
    'shoud not render From Account field',
    state.i18n.transaction.fromAccount
  );

  itShouldRender(
    data,
    'shoud not render To Account field',
    state.i18n.transaction.toAccount
  );

  itShouldRender(
    data,
    'shoud not render Income field',
    state.i18n.transaction.income
  );

  itShouldNotRender(
    data,
    'shoud not render Expense field',
    state.i18n.transaction.expense
  );

  itShouldNotRender(
    data,
    'shoud not render Sum of expense field',
    state.i18n.transaction.sumFrom
  );

  itShouldRender(
    data,
    'shoud not render Sum of Income field',
    state.i18n.transaction.income
  );

  itShouldNotRender(
    data,
    'should not render Rate field',
    state.i18n.transaction.rate
  );

  itShouldRender(
    data,
    'should render Description field',
    state.i18n.transaction.descriction
  );
});
