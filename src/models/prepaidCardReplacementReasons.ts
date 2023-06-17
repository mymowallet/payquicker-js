/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PrepaidCardReplacementReasons
 */
export enum PrepaidCardReplacementReasons {
  COMPROMISED = 'COMPROMISED',
  DAMAGED = 'DAMAGED',
  EXPIRED = 'EXPIRED',
  LOST = 'LOST',
  STOLEN = 'STOLEN',
}

/**
 * Schema for PrepaidCardReplacementReasons
 */
export const prepaidCardReplacementReasonsSchema: Schema<PrepaidCardReplacementReasons> = stringEnum(PrepaidCardReplacementReasons);
