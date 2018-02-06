import {ABus} from 'abus';
import {GUID} from 'xtypescript';
import {state, ioc} from '../../shared';
import {Currency} from '../../domain/Currency';
import {QueryCurrencyList, DeleteCurrency, SaveCurrency, RestoreCurrency} from '../commands/currency.commands';
import {CurrencyModel} from '../../models';
import {ICurrencyService} from '../../services/CurrencyService';

(() => {

  let _bus = ioc.resolve<ABus>(ABus);
  let _service = ioc.resolve<ICurrencyService>(ICurrencyService);

  _bus.Handle(QueryCurrencyList, (command: QueryCurrencyList) => {

    _service
      .getAll()
      .then(list => command.onSuccess(list))
      .catch(e => command.onError(e));
  });

  _bus.Handle(SaveCurrency, (command: SaveCurrency) => {

    _service
      .save(command.currency)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

  _bus.Handle(DeleteCurrency, (command: DeleteCurrency) => {

    _service
      .delete(command.id)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

  _bus.Handle(RestoreCurrency, (command: RestoreCurrency) => {

    _service
      .restore(command.id)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

})();
