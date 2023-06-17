/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Signs
 */
export enum Signs {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
  UNDEFINED = 'UNDEFINED',
}

/**
 * Schema for Signs
 */
export const signsSchema: Schema<Signs> = stringEnum(Signs);
