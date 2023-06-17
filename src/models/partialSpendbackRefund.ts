/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema } from '../schema';

export interface PartialSpendbackRefund {
  /** Money to be refunded from original payment */
  amount?: number;
  [key: string]: unknown;
}

export const partialSpendbackRefundSchema: Schema<PartialSpendbackRefund> = expandoObject(
  { amount: ['amount', optional(number())] }
);
