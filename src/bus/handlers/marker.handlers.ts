import {ABus} from 'abus';
import {GUID} from 'xtypescript';
import {ioc} from '../../shared';
import { QueryIncomeList, SaveMarker, DeleteMarker, RestoreMarker, QueryExpenseList } from '../commands/marker.commands';
import { IMarkerService } from '../../services/MarkerService';
import { MarkerCategory } from '../../domain/Marker';

(() => {

  let _bus = ioc.resolve<ABus>(ABus);
  let _service = ioc.resolve<IMarkerService>(IMarkerService);

  _bus.Handle(QueryIncomeList, (command: QueryIncomeList) => {

    _service
      .get(MarkerCategory.income)
      .then(list => command.onSuccess(list))
      .catch(e => command.onError(e));
  });

  
  _bus.Handle(QueryExpenseList, (command: QueryIncomeList) => {

    _service
      .get(MarkerCategory.expense)
      .then(list => command.onSuccess(list))
      .catch(e => command.onError(e));
  });

  _bus.Handle(SaveMarker, (command: SaveMarker) => {

    _service
      .save(command.marker)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

  _bus.Handle(DeleteMarker, (command: DeleteMarker) => {

    _service
      .delete(command.id)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

  _bus.Handle(RestoreMarker, (command: RestoreMarker) => {

    _service
      .restore(command.id)
      .then(() => command.onSuccess())
      .catch(e => command.onError(e));
  });

})();