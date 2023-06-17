/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentPurposes
 */
export enum PaymentPurposes {
  BONUS = 'BONUS',
  EXPENSE = 'EXPENSE',
  INCOME = 'INCOME',
  NONTAXABLE = 'NON_TAXABLE',
  OTHER = 'OTHER',
  TAXABLE = 'TAXABLE',
  UNDEFINED = 'UNDEFINED',
}

/**
 * Schema for PaymentPurposes
 */
export const paymentPurposesSchema: Schema<PaymentPurposes> = stringEnum(PaymentPurposes);
