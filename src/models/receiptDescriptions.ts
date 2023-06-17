/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import { Languages, languagesSchema } from './languages';

export interface ReceiptDescriptions {
  /** The [Language](#/rest/models/structures/language) type in IETF's BCP 47 format */
  language?: Languages;
  /** Description translated to the indicated language */
  translation?: string;
  [key: string]: unknown;
}

export const receiptDescriptionsSchema: Schema<ReceiptDescriptions> = expandoObject(
  {
    language: ['language', optional(languagesSchema)],
    translation: ['translation', optional(string())],
  }
);
