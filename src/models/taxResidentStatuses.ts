/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TaxResidentStatuses
 */
export enum TaxResidentStatuses {
  NO = 'NO',
  YES = 'YES',
  UNDEFINED = 'UNDEFINED',
}

/**
 * Schema for TaxResidentStatuses
 */
export const taxResidentStatusesSchema: Schema<TaxResidentStatuses> = stringEnum(TaxResidentStatuses);
