import { ChangePage } from '../commands/index';

export class PageChanged {
  constructor(
    public page : any,
    public data: any = null
  ) {}
}

export class LanguageChanged {
}