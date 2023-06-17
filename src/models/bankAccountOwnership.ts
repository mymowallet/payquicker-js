/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BankAccountOwnership
 */
export enum BankAccountOwnership {
  BUSINESS = 'BUSINESS',
  PERSONAL = 'PERSONAL',
}

/**
 * Schema for BankAccountOwnership
 */
export const bankAccountOwnershipSchema: Schema<BankAccountOwnership> = stringEnum(BankAccountOwnership);
