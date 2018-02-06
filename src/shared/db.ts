import {GUID} from 'xtypescript';
import {IDBAdapter, IIDBAdapter} from 'xIndexedDB';
import {Account, Currency, Marker, Transaction, MarkerCategory} from '../domain';

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
    
    store.add(new Account(GUID.New(), 'Wallet / Гаманець', uahId, 0, null, true, 1));
    store.add(new Account(GUID.New(), 'Card / Картка', uahId, 0, null, true, 2));
    store.add(new Account(GUID.New(), 'Reserved / Резерв', uahId, 0, null, true, 3));
  },

  upgradeTransaction = (db : IDBDatabase) => {

    let store = db.createObjectStore('Transaction', {keyPath: "id"});
  },
  
  upgradeMarker = (db : IDBDatabase) => {

    let store = db.createObjectStore('Marker', {keyPath: "id"});
    store.createIndex('name-category', ['name', 'category'], {unique: true});

    store.add(new Marker(GUID.New(), MarkerCategory.income, 'Salary / Зарплата'));
    store.add(new Marker(GUID.New(), MarkerCategory.expense, 'Food / Їжа'));
    store.add(new Marker(GUID.New(), MarkerCategory.expense, 'Clothes / Одяг'));
    store.add(new Marker(GUID.New(), MarkerCategory.expense, 'House / Дім'));
    store.add(new Marker(GUID.New(), MarkerCategory.expense, 'Medicine / Медицина'));
    store.add(new Marker(GUID.New(), MarkerCategory.expense, 'Transport / Транстпорт'));
    store.add(new Marker(GUID.New(), MarkerCategory.expense, 'Entertainment / Розваги'));
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
