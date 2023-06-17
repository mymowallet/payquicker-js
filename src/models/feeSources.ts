/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for FeeSources
 */
export enum FeeSources {
  TRANSACTION = 'TRANSACTION',
  USER = 'USER',
  UNDEFINED = 'UNDEFINED',
}

/**
 * Schema for FeeSources
 */
export const feeSourcesSchema: Schema<FeeSources> = stringEnum(FeeSources);
