import { MarkerModel } from "../../models";

export class QueryIncomeList {
  constructor(
    public onSuccess: (list: MarkerModel[]) => void,
    public onError: (error: any) => void
  ){}
}

export class RefreshIncomeListPage {
}

export class SaveIncome {
  constructor(
    public income: MarkerModel,
    public onSuccess: () => void,
    public onError: (error: any) => void
  ){}
}

export class DeleteMarker {
  constructor(
    public id: AAGUID,
    public onSuccess: () => void,
    public onError: (error: any) => void
  ){}
}

export class RestoreMarker {
  constructor(
    public id: AAGUID,
    public onSuccess: () => void,
    public onError: (error: any) => void
  ){}
}