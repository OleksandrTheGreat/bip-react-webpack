export class Currency {
  constructor(
    public id: string,
    public name: string,
    public precision: number = 2,
    public description: string= null,
    public isDeleted: boolean = false
  ) {}
}
