import {IIDBRepository} from '../IndexedDB/IDBRepository';

export class TestIDBRepository implements IIDBRepository {
  
    private _stores;
  
    constructor(stores: any){
      this._stores = stores;
    }
  
    query < T > (storeName : string, query : (obj : T) => boolean) : Promise < T[] > {
      return new Promise < T[] > ((resolve) => {
  
        let store = this._stores[storeName];
  
        if (!store) 
          throw 'Store "' + storeName + '" was not found!';
  
        let i = 0;
        let len = store.length;
        let result = [];
  
        for (i = 0; i < len; i++) {
  
          let item = store[i];
  
          if (query && query(item)) 
            result.push(item);
          }
        
        resolve(result);
      });
    }

    getById<T>(storeName: string, id: string): Promise<T> {
      throw new Error("Method not implemented.");
    }
  }
