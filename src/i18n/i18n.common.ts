export interface Ii18nCommon {
  back: string;
  name: string;
  description: string;
  precision: string;
}

export class i18nCommonEN implements Ii18nCommon {
  back = 'Back';
  name = 'Name';
  description = 'Description';
  precision = 'Minimum fraction digits';
}

export class i18nCommonUA implements Ii18nCommon {
  back = 'Назад';
  name = 'Назва';
  description = 'Опис';
  precision = 'К-сть знаків після крапки';
}
