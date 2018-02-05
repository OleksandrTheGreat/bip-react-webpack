import { Currency } from "../domain";
import { IIDBRepository } from "../IndexedDB/IDBRepository";
import { GUID } from "xtypescript";

export interface ICurrencyService {
  getAll(): Promise<Currency[]>;
  save(currency: Currency) : Promise<void>;
  delete(id: AAGUID) : Promise<void>;
  restore(id: AAGUID) : Promise<void>;
}

export class CurrencyService implements ICurrencyService {
  
  _storageName = 'Currency';
  _repository: IIDBRepository;

  constructor(
    repository: IIDBRepository
  ) {
    this._repository = repository;
  }

  getAll(): Promise<Currency[]> {
    return new Promise<Currency[]>((resolve, reject)=> {
      this
        ._repository
        .query<Currency>(this._storageName, null)
        .then(list => resolve(list))
        .catch(e => reject(e));
    });
  }
  
  save(currency: Currency) : Promise<void> {
    return new Promise<void>((resolve, reject)=> {

      if (currency.id) {
        this
          ._repository
          .getById<Currency>(this._storageName, currency.id)
          .then(updateCurrency => {
  
            updateCurrency.name = currency.name.toUpperCase();
            updateCurrency.precision = currency.precision;
            updateCurrency.description = currency.description;
            updateCurrency.modifiedDateTime = new Date();
  
            this
              ._repository
              .update<Currency>('Currency', updateCurrency)
              .then(() => resolve())
              .catch(e => reject(e));
          })
          .catch(e => reject(e));
      } else {
        let newCurrency = new Currency(
          GUID.New(),
          currency.name.toUpperCase(),
          currency.precision,
          currency.description
        );
  
        this
          ._repository
          .update<Currency>('Currency', newCurrency)
          .then(() => resolve())
          .catch(e => reject(e));
      }
    });
  }

  delete(id: AAGUID) : Promise<void> {
    return this._updateIsDeleted(id, true);
  }

  restore(id: AAGUID): Promise<void> {
    return this._updateIsDeleted(id, false);
  }

  private _updateIsDeleted(id: AAGUID, isDeleted: boolean): Promise<void> {
    return new Promise<void>((resolve, reject)=> {

      this
        ._repository
        .getById<Currency>(this._storageName, id)
        .then(currency => {

          currency.isDeleted = isDeleted;
          currency.modifiedDateTime = new Date();

          this
          ._repository
          .update<Currency>('Currency', currency)
          .then(() => resolve())
          .catch(e => reject(e));
        })
        .catch(e => reject(e));
    });
  }
}