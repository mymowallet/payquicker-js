/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for FeeResponsibilityParties
 */
export enum FeeResponsibilityParties {
  COMPANY = 'COMPANY',
  USER = 'USER',
  PAYQUICKER = 'PAYQUICKER',
  UNDEFINED = 'UNDEFINED',
}

/**
 * Schema for FeeResponsibilityParties
 */
export const feeResponsibilityPartiesSchema: Schema<FeeResponsibilityParties> = stringEnum(FeeResponsibilityParties);
