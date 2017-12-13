import {Currency} from '../domain';
import {IIDBRepository} from "../IndexedDB/IDBRepository";

export interface ICurrencyFormRepository {
  save(currency: Currency): Promise<boolean>;
}

export class CurrencyFormRepository implements ICurrencyFormRepository{

  private _repository: IIDBRepository;

  constructor(repository: IIDBRepository)
  {
    this._repository = repository;
  }

  save(Currency?: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}