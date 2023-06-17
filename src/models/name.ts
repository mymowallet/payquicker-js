/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface Name {
  language?: string;
  translation?: string;
  [key: string]: unknown;
}

export const nameSchema: Schema<Name> = expandoObject({
  language: ['language', optional(string())],
  translation: ['translation', optional(string())],
});
