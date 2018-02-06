import { MarkerCategory } from "../domain/Marker";

export class MarkerModel {
  constructor(
    public id: AAGUID,
    public name: string,
    public category?: MarkerCategory,
    public isDeleted?: boolean
  ){}
}
