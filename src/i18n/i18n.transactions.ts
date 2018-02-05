export interface Ii18nTransactions {
  title: string;
  create: string;
}

export class i18nTransactionsEN implements Ii18nTransactions {
  title = 'Transactions';
  create = 'Create transaction';
}

export class i18nTransactionsUA implements Ii18nTransactions {
  title = 'Операції';
  create = 'Провести операцію';
}
