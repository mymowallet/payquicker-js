/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for FeeValues
 */
export enum FeeValues {
  PERCENTAGE = 'PERCENTAGE',
  STATIC = 'STATIC',
}

/**
 * Schema for FeeValues
 */
export const feeValuesSchema: Schema<FeeValues> = stringEnum(FeeValues);
