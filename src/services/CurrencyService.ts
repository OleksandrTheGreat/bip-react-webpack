import { Currency } from "../domain";
import { CurrencyModel } from "../models";
import { IIDBRepository } from "../IndexedDB/IDBRepository";
import { GUID } from "xtypescript";

export interface ICurrencyService {
  getAll(): Promise<CurrencyModel[]>;
  save(currency: CurrencyModel) : Promise<void>;
  delete(id: AAGUID) : Promise<void>;
  restore(id: AAGUID) : Promise<void>;
}

export class CurrencyService implements ICurrencyService {
  
  storageName = 'Currency';

  constructor(
    private repository: IIDBRepository
  ) {}

  getAll(): Promise<CurrencyModel[]> {

    return new Promise<CurrencyModel[]>((resolve, reject)=> {

      this
        .repository
        .query<Currency>(this.storageName, null)
        .then(list => {

          let result = list
            .sort((a, b) => {
              if(a.name > b.name)
                return 1;
              if(a.name < b.name)
                return -1;
              return 0;
            })
            .map(x => new CurrencyModel(
              x.id,
              x.name,
              x.precision,
              x.description,
              x.isDeleted
            ));

          resolve(result);
        })
        .catch(e => reject(e));
    });
  }
  
  save(currency: CurrencyModel) : Promise<void> {
    return new Promise<void>((resolve, reject)=> {

      if (currency.id) {

        this
          .repository
          .getById<Currency>(this.storageName, currency.id)
          .then(updateCurrency => {
  
            updateCurrency.name = currency.name.toUpperCase();
            updateCurrency.precision = currency.precision;
            updateCurrency.description = currency.description;
            updateCurrency.modifiedDateTime = new Date();
  
            this
              .repository
              .update<Currency>(this.storageName, updateCurrency)
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
          .repository
          .update<Currency>(this.storageName, newCurrency)
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
        .repository
        .getById<Currency>(this.storageName, id)
        .then(currency => {

          currency.isDeleted = isDeleted;
          currency.modifiedDateTime = new Date();

          this
          .repository
          .update<Currency>(this.storageName, currency)
          .then(() => resolve())
          .catch(e => reject(e));
        })
        .catch(e => reject(e));
    });
  }
}