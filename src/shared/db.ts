import {GUID} from 'xtypescript';
import {IDBAdapter, IIDBAdapter} from 'xIndexedDB';
import {Account, Currency, Marker, Transaction} from '../domain';

let 
  uahId = GUID.New(),

  upgradeCurrency = (db : IDBDatabase) => {

    let store = db.createObjectStore('Currency', {keyPath: "id"});

    store.createIndex('name', 'name', {unique: true});

    store.add(new Currency(uahId, 'UAH', 2, 'Ukrainian Hryvnia'));
    store.add(new Currency(GUID.New(), 'USD', 2, 'US Dollar'));
    store.add(new Currency(GUID.New(), 'EUR', 2, 'Euro'));
  },

  upgradeAccount = (db : IDBDatabase) => {

    let store = db.createObjectStore('Account', {keyPath: "id"});

    store.createIndex('name-currency', ['name', 'currencyId'], {unique: true});
    
    store.add(new Account(GUID.New(), 'Wallet', uahId, 0, null, true, 1));
    store.add(new Account(GUID.New(), 'Card', uahId, 0, null, true, 2));
    store.add(new Account(GUID.New(), 'Reserved', uahId, 0, null, true, 3));
  },

  upgradeTransaction = (db : IDBDatabase) => {

    let store = db.createObjectStore('Transaction', {keyPath: "id"});
  },
  
  upgradeMarker = (db : IDBDatabase) => {

    let store = db.createObjectStore('Marker', {keyPath: "id"});
    store.createIndex('name-category', ['name', 'category'], {unique: true});
  };

export const idbAdapter: IIDBAdapter = new IDBAdapter(
  'BiP2', 
  1, 
  (db : IDBDatabase) => {
    upgradeCurrency(db);
    upgradeAccount(db);
    upgradeTransaction(db);
    upgradeMarker(db);
  }
);

idbAdapter.get();
