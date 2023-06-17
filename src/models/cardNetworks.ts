/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardNetworks
 */
export enum CardNetworks {
  MASTERCARD = 'MASTER_CARD',
  VISA = 'VISA',
}

/**
 * Schema for CardNetworks
 */
export const cardNetworksSchema: Schema<CardNetworks> = stringEnum(CardNetworks);
