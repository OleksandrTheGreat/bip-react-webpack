import {IIDBRepository} from "../IndexedDB/IDBRepository";
import {IApplicationState} from "../shared/state";
import {Setting} from "../domain";

export interface IApplicationStateService {
  save(state: IApplicationState): Promise<void>;
  get(): Promise<IApplicationState>;
}

export class ApplicationStateService implements IApplicationStateService {

  private _repository: IIDBRepository;

  constructor(repository: IIDBRepository)
  {
    this._repository = repository;
  }

  save(state: IApplicationState): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this
        ._repository
        .update('Settings', new Setting('state', state))
        .then(()=>resolve())
        .catch(e=>reject(e));
    });
  }

  get(): Promise<IApplicationState> {
    return new Promise<IApplicationState>((resolve, reject) => {
      this
        ._repository
        .getById<Setting>('Settings', 'state')
        .then((setting)=>resolve(setting.value))
        .catch(e=>reject(e));
    });
  }
}
