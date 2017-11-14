import {IIDBAdapter} from './IDBAdapter';

export interface IIDBRepository {
  query < T > (storeName : string, query : (obj : T) => boolean) : Promise < Array < T > >;
}

export class IDBRepository implements IIDBRepository {

  private _idbAdapter : IIDBAdapter;

  constructor(private idbAdapter : IIDBAdapter) {
    this._idbAdapter = idbAdapter;
  }

  query < T > (storeName : string, query : (obj : T) => boolean = null) : Promise < Array < T > > {

    return new Promise < Array < T > > ((resolve) => {

      this
        ._idbAdapter
        .get()
        .then(db => {

          let result : Array < T > = [];

          let request: IDBRequest = db
            .transaction(storeName, 'readonly')
            .objectStore(storeName)
            .openCursor();

          request.onsuccess = (e : any) => {

            let cursor = e.target.result;

            if (!cursor) {
              resolve(result);
              return;
            }

            let value : T = cursor.value;

            if (query) {

              if (query(value)) 
                result.push(value);
              
              cursor.continue();
              return;
            }

            result.push(value);
            cursor.continue();
          };
        });
    });
  }
}