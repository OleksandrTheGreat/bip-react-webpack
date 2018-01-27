import {GUID} from 'xtypescript';
import {IDBAdapter, IIDBAdapter} from '../IndexedDB/IDBAdapter';
import {Account, Currency, Marker, Transaction} from '../domain';

let uahId = GUID.New();

let upgradeSettings =  (db : IDBDatabase) => {

  let store = db.createObjectStore('Settings', {keyPath: "id"});

  store.add({'id': 'state', 'value': null });
};

let upgradeCurrency = (db : IDBDatabase) => {

  let store = db.createObjectStore('Currency', {keyPath: "id"});

  store.createIndex('name', 'name', {unique: true});

  store.add(new Currency(uahId, 'UAH', 2, 'Ukrainian Hryvnia'));
  store.add(new Currency(GUID.New(), 'USD', 2, 'US Dollar'));
  store.add(new Currency(GUID.New(), 'EUR', 2, 'Euro'));
};

let upgradeAccount = (db : IDBDatabase) => {

  let store = db.createObjectStore('Account', {keyPath: "id"});

  store.createIndex('name-currency', ['name', 'currencyId'], {unique: true});
  
  store.add(new Account(GUID.New(), 'Wallet', uahId, 0, null, true, 1));
  store.add(new Account(GUID.New(), 'Card', uahId, 0, null, true, 2));
  store.add(new Account(GUID.New(), 'Reserved', uahId, 0, null, true, 3));
  
  store.add(new Account(GUID.New(), 'Expense', uahId));
  store.add(new Account(GUID.New(), 'Income', uahId));
};

export const idbAdapter: IIDBAdapter = new IDBAdapter('BiP2', 1, (db : IDBDatabase) => {
  upgradeSettings(db);
  upgradeCurrency(db);
  upgradeAccount(db);
});

idbAdapter.get();
