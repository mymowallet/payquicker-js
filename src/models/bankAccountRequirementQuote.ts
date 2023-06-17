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
} from '../schema';
import { CategoryTypes, categoryTypesSchema } from './categoryTypes';
import {
  CountriesAlphaCode3,
  countriesAlphaCode3Schema,
} from './countriesAlphaCode3';
import { Currencies, currenciesSchema } from './currencies';
import { FeeDistribution, feeDistributionSchema } from './feeDistribution';
import { Fees, feesSchema } from './fees';
import { FeeSources, feeSourcesSchema } from './feeSources';
import { FeeValues, feeValuesSchema } from './feeValues';

export interface BankAccountRequirementQuote {
  /** Category types */
  category?: CategoryTypes;
  /** 3 Character symbol for country */
  destinationCountry?: CountriesAlphaCode3;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  destinationCurrency?: Currencies;
  distribution?: FeeDistribution[];
  /** Fee source types */
  source?: FeeSources;
  totalAmount?: number;
  /** Allocated money to be sent in the transaction. */
  transactionAmount?: number;
  /** Fee types */
  type?: Fees;
  /** Allocated money to be sent in the transaction. */
  valueAmount?: number;
  /** Fee value types */
  valueType?: FeeValues;
  [key: string]: unknown;
}

export const bankAccountRequirementQuoteSchema: Schema<BankAccountRequirementQuote> = expandoObject(
  {
    category: ['category', optional(categoryTypesSchema)],
    destinationCountry: [
      'destinationCountry',
      optional(countriesAlphaCode3Schema),
    ],
    destinationCurrency: ['destinationCurrency', optional(currenciesSchema)],
    distribution: [
      'distribution',
      optional(array(lazy(() => feeDistributionSchema))),
    ],
    source: ['source', optional(feeSourcesSchema)],
    totalAmount: ['totalAmount', optional(number())],
    transactionAmount: ['transactionAmount', optional(number())],
    type: ['type', optional(feesSchema)],
    valueAmount: ['valueAmount', optional(number())],
    valueType: ['valueType', optional(feeValuesSchema)],
  }
);
