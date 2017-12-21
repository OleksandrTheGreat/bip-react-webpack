import {IIDBAdapter} from './IDBAdapter';

export interface IIDBRepository {
  query < T > (storeName : string, query : (obj : T) => boolean) : Promise < Array < T > >;
  getById < T > (storeName : string, id : AAGUID) : Promise < T >;
  update < T > (storeName : string, entity : T) : Promise < void >;
}

export class IDBRepository implements IIDBRepository {

  private _idbAdapter : IIDBAdapter;

  constructor(private idbAdapter : IIDBAdapter) {
    this._idbAdapter = idbAdapter;
  }

  query < T > (storeName : string, query : (obj : T) => boolean) : Promise < Array < T > > {

    return new Promise < Array < T > > ((resolve, reject) => {

      this
        ._idbAdapter
        .get()
        .then(db => {

          let result : Array < T > = [];

          let request = db
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

          request.onerror = (e) => {
            reject(e);
          };
        });
    });
  }

  getById < T > (storeName : string, id : AAGUID) : Promise < T > {

    return new Promise < T > ((resolve, reject) => {

      this
        ._idbAdapter
        .get()
        .then(db => {

          let request = db
            .transaction(storeName, 'readonly')
            .objectStore(storeName)
            .get(id);

          request.onsuccess = (e) => {
            resolve(request.result);
          };

          request.onerror = (e) => {
            reject(e);
          };
        });
    });
  }

  update < T > (storeName : string, entity : T) : Promise < void > {
    return new Promise < void > ((resolve, reject) => {

      this
        ._idbAdapter
        .get()
        .then(db => {

          let request = db
            .transaction(storeName, 'readwrite')
            .objectStore(storeName)
            .put(entity);

          request.onsuccess = () => {
            resolve();
          };

          request.onerror = (e) => {
            reject(e);
          };
        });
    });
  }
}
