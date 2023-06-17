/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import { BankTypes, bankTypesSchema } from './bankTypes';
import { Currencies, currenciesSchema } from './currencies';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import { MetadataObject, metadataObjectSchema } from './metadataObject';
import { ProgramTypes, programTypesSchema } from './programTypes';

export interface ProgramResult {
  /** Auto-generated unique identifier representing a program, prefixed with prog- */
  token: string;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  currency: Currencies;
  /** Name of the bank */
  bank: BankTypes;
  /** Indicates the type of program associated with a prepaid card */
  type: ProgramTypes;
  links?: HateoasSelfRef[];
  meta?: MetadataObject;
  [key: string]: unknown;
}

export const programResultSchema: Schema<ProgramResult> = expandoObject({
  token: ['token', string()],
  currency: ['currency', currenciesSchema],
  bank: ['bank', bankTypesSchema],
  type: ['type', programTypesSchema],
  links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
  meta: ['meta', optional(lazy(() => metadataObjectSchema))],
});
