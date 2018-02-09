export interface Ii18nTransaction {
  title: string;
  createTitle: string;
  accountToAccount: string;
  income: string;
  expense: string;
  type: string;
  fromAccount: string;
  toAccount: string;
}

export class i18nTransactionEN implements Ii18nTransaction {
  title = 'Transaction';
  createTitle = 'Create transaction';
  accountToAccount = 'Account to Account';
  income = 'Income';
  expense = 'Expense';
  type = 'Transaction type';
  fromAccount = 'From account';
  toAccount = 'To account';
}

export class i18nTransactionUA implements Ii18nTransaction {
  title = 'Операція';
  createTitle = 'Провести операцію';
  accountToAccount = 'Між рахунками';
  income = 'Надходження';
  expense = 'Витрата';
  type = 'Тип операції';
  fromAccount = 'З рахунку';
  toAccount = 'На рахунок';
}
