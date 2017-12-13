export interface Ii18nCommon {
  back: string;
  name: string;
  description: string;
  edit: string;
  open: string;
  question: string;
  goBackQuestion: string;
  yes: string;
  no: string;
  save: string;
  cancel: string;
}

export class i18nCommonEN implements Ii18nCommon {
  back = 'Back';
  name = 'Name';
  description = 'Description';
  edit = 'Edit';
  open = 'Open';
  question = 'Question';
  goBackQuestion = 'Some changes were made on a page. Do You realy want to go back without saving?';
    yes = 'Yes';
  no = 'No';
  save = 'Save';
  cancel = 'Cancel';
}

export class i18nCommonUA implements Ii18nCommon {
  back = 'Назад';
  name = 'Назва';
  description = 'Опис';  
  edit = 'Редагувати';
  open = 'Відкрити';
  question = 'Запитання';
  goBackQuestion = 'На сторінці відбулися деякі зміни. Ви впевнені, що хочете перейти на попередню сторінку без збереження?';
  yes = 'Так';
  no = 'Ні';
  save = 'Зберегти';
  cancel = 'Відмінити';
}
