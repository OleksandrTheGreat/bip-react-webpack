import { IndexedDBAdapter } from '../indexedDB/IndexedDBAdapter';
import {Account, Currency, Marker, Transaction} from '../domain';

let upgradeCurrency = (db: IDBDatabase) => {

  let store = db.createObjectStore('Currency', { keyPath: "id" });

  store.add(new Currency('1','UAH'));
  store.add(new Currency('2','USH'));
  store.add(new Currency('3','EUR'));
};

export const db = new IndexedDBAdapter(
  'BiP',
  1,
  (db: IDBDatabase) => {
    upgradeCurrency(db);
  }  
);

db.get();
