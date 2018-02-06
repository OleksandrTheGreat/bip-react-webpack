import { MarkerModel } from "../../models";

export class QueryIncomeList {
  constructor(
    public onSuccess: (list: MarkerModel[]) => void,
    public onError: (error: any) => void
  ){}
}

export class RefreshIncomeListPage {
}

export class SaveMarker {
  constructor(
    public marker: MarkerModel,
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

export class RefreshExpenseListPage {
}

export class QueryExpenseList {
  constructor(
    public onSuccess: (list: MarkerModel[]) => void,
    public onError: (error: any) => void
  ){}
}
