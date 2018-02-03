import {CurrencyModel} from '../../models';

export class DeleteCurrency {
  constructor(
    public currency: CurrencyModel,
    public onSuccess: () => void,
    public onError: (error: any) => void
  ){}
}

export class SaveCurrency {
  constructor(
    public currency: CurrencyModel,
    public onSuccess: () => void,
    public onError: (error: any) => void
  ){}
}

export class QueryCurrencyList {
  constructor(
    public onSuccess: (list: CurrencyModel[]) => void,
    public onError: (error: any) => void
  ){}
}

export class RefreshCurrencyListPage {
}

export class UnDeleteCurrency {
  constructor(
    public currency: CurrencyModel,
    public onSuccess: () => void,
    public onError: (error: any) => void
  ){}
}