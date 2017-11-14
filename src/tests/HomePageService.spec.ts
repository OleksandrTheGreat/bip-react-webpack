import {IHomePageService, HomePageService} from '../services/HomePageService';
import {Account} from '../domain/Account';
import {IIDBRepository} from '../IndexedDB/IDBRepository';

class TestIDBRepository implements IIDBRepository {

  private _stores = {
    Account: [
      new Account('1', '1', '1', 0, null, true),
      new Account('1', '1', '1'),
      new Account('1', '1', '1')
    ]
  };

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
}

describe('HomePageService', () => {

  let service : IHomePageService;

  it('should return only "showOnHomePage" accounts', () => {

    service = new HomePageService(new TestIDBRepository());

    service
      .getDashboardAccounts()
      .then(accounts => {

        expect(accounts.length).toEqual(1);
      });
  });
});
