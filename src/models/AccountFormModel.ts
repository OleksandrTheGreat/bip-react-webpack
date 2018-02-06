import {AccountModel} from "./AccountModel";
import {FormOptionValue} from "../components/common/Form";

export class AccountFormModel {
  constructor(
    public account: AccountModel,
    public currencyList: FormOptionValue[]
  ) {}
}
