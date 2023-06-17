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
import {
  FeeResponsibilityParties,
  feeResponsibilityPartiesSchema,
} from './feeResponsibilityParties';
import {
  FeeResponsibilitySources,
  feeResponsibilitySourcesSchema,
} from './feeResponsibilitySources';
import {
  ReceiptDescriptions,
  receiptDescriptionsSchema,
} from './receiptDescriptions';

export interface FeeDistribution {
  /** Allocated money to be sent in the transaction. */
  amount?: number;
  /** [Currency code type](#/rest/models/structures/country) for the object */
  currency?: Currencies;
  description?: ReceiptDescriptions[];
  /** Combination of the bank account amount and currency type */
  formattedAmount?: string;
  /** Fee percentage that the responsible account pays */
  percentage?: number;
  /** Fee responsibility types */
  responsibility?: FeeResponsibilityParties;
  /** Fee responsibility source types */
  responsibilitySource?: FeeResponsibilitySources;
  /** Unique identifier representing the [source of funds](#/rest/models/structures/source-token) */
  sourceToken?: string;
  [key: string]: unknown;
}

export const feeDistributionSchema: Schema<FeeDistribution> = expandoObject({
  amount: ['amount', optional(number())],
  currency: ['currency', optional(currenciesSchema)],
  description: [
    'description',
    optional(array(lazy(() => receiptDescriptionsSchema))),
  ],
  formattedAmount: ['formattedAmount', optional(string())],
  percentage: ['percentage', optional(number())],
  responsibility: ['responsibility', optional(feeResponsibilityPartiesSchema)],
  responsibilitySource: [
    'responsibilitySource',
    optional(feeResponsibilitySourcesSchema),
  ],
  sourceToken: ['sourceToken', optional(string())],
});
