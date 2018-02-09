export interface Ii18nTransactionList {
  title: string;
  create: string;
}

export class i18nTransactionListEN implements Ii18nTransactionList {
  title = 'Transactions';
  create = 'Create transaction';
}

export class i18nTransactionListUA implements Ii18nTransactionList {
  title = 'Операції';
  create = 'Провести операцію';
}
