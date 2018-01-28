import {Currency} from '../../domain/Currency';
import {bus, state, ioc} from '../../shared';
import {QueryCurrencyList, DeleteCurrency, SaveCurrency} from '../commands/currency.commands';
import { GUID } from 'xtypescript';

(() => {

  let repository = ioc.IIDBRepository.resolve();

  bus.Handle(DeleteCurrency, (command: DeleteCurrency) => {

    command.currency.isDeleted = true;

    repository
      .update('Currency', command.currency)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

  bus.Handle(SaveCurrency, (command: SaveCurrency) => {

    command.currency.id = command.currency.id || GUID.New();

    repository
      .update('Currency', command.currency)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

  bus.Handle(QueryCurrencyList, (command: QueryCurrencyList) => {

    repository
      .query<Currency>(
        "Currency", 
        (currency: Currency) => !currency.isDeleted
      )
      .then(currencyList => {
        let result = currencyList.sort((a, b)=>{
          
          if(a.name > b.name)
            return 1;
          
          if(a.name < b.name)
            return -1;
          
          return 0;
        });

        command.onSuccess(result);
      })
      .catch(e => command.onError(e));
  });
})();
