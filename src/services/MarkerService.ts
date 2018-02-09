import {Marker, MarkerCategory} from "../domain";
import {IIDBRepository} from "xIndexedDB";
import {GUID} from "xtypescript";
import {MarkerModel} from "../models";

export abstract class  IMarkerService {
  abstract getAll(): Promise<MarkerModel[]>;
  abstract get(category: MarkerCategory): Promise<MarkerModel[]>;
  abstract save(marker: MarkerModel) : Promise<void>;
  abstract delete(id: AAGUID) : Promise<void>;
  abstract restore(id: AAGUID) : Promise<void>;
}

export class MarkerService implements IMarkerService {
  
  storageName = 'Marker';
  
  constructor(
    private repository: IIDBRepository
  ) {}

  getAll(): Promise<MarkerModel[]> {
    return new Promise<MarkerModel[]>((resolve, reject)=> {

      this
        .repository
        .query<Marker>(this.storageName)
        .then(list => {

          let result = list
            .sort((a, b) => {
              if(a.name > b.name)
                return 1;
              if(a.name < b.name)
                return -1;
              return 0;
            })
            .map(x => new MarkerModel(
              x.id,
              x.name,
              x.category,
              x.isDeleted
            ));

          resolve(result);
        })
        .catch(e => reject(e));
    });
  }

  get(category: MarkerCategory): Promise<MarkerModel[]> {
    return new Promise<MarkerModel[]>((resolve, reject)=> {

      this
        .repository
        .query<Marker>(this.storageName, x => x.category === category)
        .then(list => {

          let result = list
            .sort((a, b) => {
              if(a.name > b.name)
                return 1;
              if(a.name < b.name)
                return -1;
              return 0;
            })
            .map(x => new MarkerModel(
              x.id,
              x.name,
              x.category,
              x.isDeleted
            ));

          resolve(result);
        })
        .catch(e => reject(e));
    });
  }

  save(marker: MarkerModel): Promise<void> {
    return new Promise<void>((resolve, reject)=> {

      if (marker.id) {
        this
          .repository
          .getById<Marker>(this.storageName, marker.id)
          .then(updateMarker => {
  
            updateMarker.name = marker.name.toUpperCase();
            updateMarker.modifiedDateTime = new Date();
  
            this
              .repository
              .update<Marker>(this.storageName, updateMarker)
              .then(() => resolve())
              .catch(e => reject(e));
          })
          .catch(e => reject(e));
      } else {

        let newMarker = new Marker(
          GUID.New(),
          marker.category,
          marker.name.toUpperCase()
        );
  
        this
          .repository
          .update<Marker>(this.storageName, newMarker)
          .then(() => resolve())
          .catch(e => reject(e));
      }
    });
  }

  delete(id: AAGUID): Promise<void> {
    return this._updateIsDeleted(id, true);
  }

  restore(id: AAGUID): Promise<void> {
    return this._updateIsDeleted(id, false);
  }

  private _updateIsDeleted(id: AAGUID, isDeleted: boolean) :  Promise<void> {
    return new Promise<void>((resolve, reject)=> {
      this
        .repository
        .getById<Marker>(this.storageName, id)
        .then(marker => {

          marker.isDeleted = isDeleted;
          marker.modifiedDateTime = new Date();

          this
            .repository
            .update<Marker>(this.storageName, marker)
            .then(() => resolve())
            .catch(e => reject(e));
        })
        .catch(e => reject(e));
    });
  }
}