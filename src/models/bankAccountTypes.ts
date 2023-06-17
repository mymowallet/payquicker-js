/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BankAccountTypes
 */
export enum BankAccountTypes {
  CHECKING = 'CHECKING',
  MONEYMARKET = 'MONEY_MARKET',
  SAVINGS = 'SAVINGS',
  UNDEFINED = 'UNDEFINED',
}

/**
 * Schema for BankAccountTypes
 */
export const bankAccountTypesSchema: Schema<BankAccountTypes> = stringEnum(BankAccountTypes);
