/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Addresses
 */
export enum Addresses {
  BUSINESS = 'BUSINESS',
  MAILING = 'MAILING',
  RESIDENTIAL = 'RESIDENTIAL',
  UNDEFINED = 'UNDEFINED',
}

/**
 * Schema for Addresses
 */
export const addressesSchema: Schema<Addresses> = stringEnum(Addresses);
