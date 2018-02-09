import {TransactionModel} from './TransactionModel';
import {AccountModel} from './AccountModel';
import {MarkerModel} from './MarkerModel';

export class TransactionFormModel {

  constructor(
    public transaction: TransactionModel = new TransactionModel(),
    public accountList: AccountModel[] = [],
    public incomeList: MarkerModel[] = [],
    public expenseList: MarkerModel[] = []
  ) {}
}
