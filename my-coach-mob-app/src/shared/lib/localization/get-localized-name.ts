import { capitalize } from 'lodash';

import { EntityField } from 'shared/config/entity-field';
import { Language } from 'shared/config/language';

const hasTranslationKey = <Entity extends Record<string, unknown>>(
  entity: Entity,
  key: string,
): boolean => {
  return key in entity;
};

const getName = <Entity extends Record<string, unknown>>(
  defaultKey: string,
  entity: Entity,
  language: Language,
) => {
  const translationKey =
    Language.en === language ? defaultKey : `${defaultKey}${capitalize(language)}`;

  if (hasTranslationKey(entity, translationKey)) {
    return (entity as Record<string, string>)[translationKey] || '';
  }

  return '';
};

export const getLocalizedName = <
  Entity extends {
    name: string;
    nameUk: string;
  },
>(
  entity: Entity,
  language: Language,
): string => {
  return getName(EntityField.name, entity, language);
};

export const getLocalizedInstruction = <
  Entity extends {
    instruction: string;
    instructionUk: string;
  },
>(
  entity: Entity,
  language: Language,
): string => {
  return getName(EntityField.instruction, entity, language);
};
