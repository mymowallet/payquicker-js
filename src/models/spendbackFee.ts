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
import { CategoryTypes, categoryTypesSchema } from './categoryTypes';
import { FeeDistribution, feeDistributionSchema } from './feeDistribution';
import { Fees, feesSchema } from './fees';
import { FeeSources, feeSourcesSchema } from './feeSources';
import { FeeValues, feeValuesSchema } from './feeValues';

export interface SpendbackFee {
  /** Category types */
  category?: CategoryTypes;
  distribution?: FeeDistribution[];
  /** Fee source types */
  source?: FeeSources;
  /** Total amount of money for all transactions */
  totalAmount?: number;
  /** Total amount of money for the transaction */
  transactionAmount?: number;
  /** Fee types */
  type?: Fees;
  /** Value of the target resource */
  valueAmount?: string;
  /** Fee value types */
  valueType?: FeeValues;
  [key: string]: unknown;
}

export const spendbackFeeSchema: Schema<SpendbackFee> = expandoObject({
  category: ['category', optional(categoryTypesSchema)],
  distribution: [
    'distribution',
    optional(array(lazy(() => feeDistributionSchema))),
  ],
  source: ['source', optional(feeSourcesSchema)],
  totalAmount: ['totalAmount', optional(number())],
  transactionAmount: ['transactionAmount', optional(number())],
  type: ['type', optional(feesSchema)],
  valueAmount: ['valueAmount', optional(string())],
  valueType: ['valueType', optional(feeValuesSchema)],
});
