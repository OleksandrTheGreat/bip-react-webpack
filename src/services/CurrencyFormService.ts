import {Currency} from '../domain';
import {IIDBRepository} from "../IndexedDB/IDBRepository";

export interface ICurrencyFormService {
  save(currency: Currency): Promise<void>;
}

export class CurrencyFormService implements ICurrencyFormService {

  private _repository: IIDBRepository;

  constructor(repository: IIDBRepository)
  {
    this._repository = repository;
  }

  save(currency: Currency): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this
        ._repository
        .update('Currency', currency)
        .then(()=>resolve())
        .catch(e=>reject(e));
    });
  }
}