/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema } from '../schema';
import { Currencies, currenciesSchema } from './currencies';

/** Exchange rate */
export interface FxRate {
  /** Allocated money to be sent in the transaction. */
  destinationAmount?: number;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  destinationCurrency?: Currencies;
  /** Exchange [rate](#/rest/models/structures/rate) */
  rate?: number;
  /** Allocated money to be sent in the transaction. */
  sourceAmount?: number;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  sourceCurrency?: Currencies;
  [key: string]: unknown;
}

export const fxRateSchema: Schema<FxRate> = expandoObject({
  destinationAmount: ['destinationAmount', optional(number())],
  destinationCurrency: ['destinationCurrency', optional(currenciesSchema)],
  rate: ['rate', optional(number())],
  sourceAmount: ['sourceAmount', optional(number())],
  sourceCurrency: ['sourceCurrency', optional(currenciesSchema)],
});
