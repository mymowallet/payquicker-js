/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import { Languages, languagesSchema } from './languages';

/** [Localized](#/rest/models/structures/key-value-pair-language-type-string) requirement description for display purposes */
export interface Translation {
  /** The [Language](#/rest/models/structures/language) type in IETF's BCP 47 format */
  language?: Languages;
  /** Translated string in the specified language */
  translation?: string;
  [key: string]: unknown;
}

export const translationSchema: Schema<Translation> = expandoObject({
  language: ['language', optional(languagesSchema)],
  translation: ['translation', optional(string())],
});
