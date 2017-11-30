import {Currency} from "../domain";
import {IIDBRepository} from "../IndexedDB/IDBRepository";

export interface ICurrencyService {
  getAll() : Promise < Currency[] >
}

export class CurrencyService implements ICurrencyService {

  private _repository : IIDBRepository;

  constructor(repository : IIDBRepository) {
    this._repository = repository;
  }

  getAll() : Promise < Currency[] > {
    return new Promise<Currency[]>((resolve, reject) => {

      this._repository
      .query<Currency>("Currency", null)
      .then(currencyList => {
        let result = currencyList.sort((a, b)=>{
          
          if(a.name > b.name)
            return 1;
          
          if(a.name < b.name)
            return -1;
          
          return 0;
        });

        resolve(result);
      })
      .catch(e => {reject(e);});
    });
  }
}
