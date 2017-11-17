import {IHomePageService, HomePageService} from '../services/HomePageService';
import {Account} from '../domain/Account';
import {TestIDBRepository} from './TestIDBRepository';

describe('HomePageService', () => {

  let service : IHomePageService;

  it('should return only active "showOnHomePage" accounts', () => {

    let deletedAccount = new Account('1', '1', '1', 0, null, true);
    deletedAccount.isDeleted = true;

    service = new HomePageService(new TestIDBRepository({
      Account: [
        new Account('1', '1', '1', 0, null, true),
        deletedAccount,
        new Account('1', '1', '1')
      ]
    }));

    service
      .getDashboardAccounts()
      .then(accounts => {
        expect(accounts.length).toEqual(1);
      });
  });
});
