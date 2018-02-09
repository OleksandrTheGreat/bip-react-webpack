import {TransactionModel} from './TransactionModel';
import {AccountModel} from './AccountModel';
import {MarkerModel} from './MarkerModel';

export enum TransactionType {
  FromAccountToAccount = 0,
  Income,
  Expense
}

export class TransactionFormModel {

  constructor(
    public transactiontype: TransactionType = TransactionType.FromAccountToAccount,
    public transaction: TransactionModel = new TransactionModel(),
    public accountList: AccountModel[] = [],
    public incomeList: MarkerModel[] = [],
    public expenseList: MarkerModel[] = []
  ) {}
}
