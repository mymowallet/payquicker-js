/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { Currencies, currenciesSchema } from './currencies';
import { HateoasSelfRef, hateoasSelfRefSchema } from './hateoasSelfRef';
import { MetadataObject, metadataObjectSchema } from './metadataObject';

export interface BalanceResult {
  /** Amount of money in the account */
  amount: number;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  currency: Currencies;
  /** Combination of the bank account amount and currency type */
  formattedAmount: string;
  /** [Token](#/rest/models/structures/token) representing the resource */
  token: string;
  links?: HateoasSelfRef[];
  meta?: MetadataObject;
  [key: string]: unknown;
}

export const balanceResultSchema: Schema<BalanceResult> = expandoObject({
  amount: ['amount', number()],
  currency: ['currency', currenciesSchema],
  formattedAmount: ['formattedAmount', string()],
  token: ['token', string()],
  links: ['links', optional(array(lazy(() => hateoasSelfRefSchema)))],
  meta: ['meta', optional(lazy(() => metadataObjectSchema))],
});
