export interface Ii18nCommon {
  back: string;
  name: string;
  description: string;
  edit: string;
  open: string;
}

export class i18nCommonEN implements Ii18nCommon {
  back = 'Back';
  name = 'Name';
  description = 'Description';
  edit = 'Edit';
  open = 'Open';
}

export class i18nCommonUA implements Ii18nCommon {
  back = 'Назад';
  name = 'Назва';
  description = 'Опис';  
  edit = 'Редагувати';
  open = 'Відкрити';
}
