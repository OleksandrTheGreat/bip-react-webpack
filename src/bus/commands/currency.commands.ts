import { Currency } from "../../domain";

export class DeleteCurrency {
  constructor(
    public currency: Currency,
    public onSuccess: () => void,
    public onError: (error: any) => void
  ){}
}

export class SaveCurrency {
  constructor(
    public currency: Currency,
    public onSuccess: () => void,
    public onError: (error: any) => void
  ){}
}

export class QueryCurrencyList {
  constructor(
    public onSuccess: (list: Currency[]) => void,
    public onError: (error: any) => void
  ){}
}

export class RefreshCurrencyListPage {
}