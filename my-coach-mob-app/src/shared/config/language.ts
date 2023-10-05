import { Scope, TranslateOptions } from 'i18n-js';

export enum Language {
  en = 'en',
  uk = 'uk',
}

export const Languages = [...Object.values(Language)];

export type TranslateFunction = (scope: Scope, options?: TranslateOptions) => string;
