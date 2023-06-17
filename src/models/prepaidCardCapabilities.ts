/**
 * PQ API v2Lib
 *
 * This file was automatically generated for PayQuicker by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PrepaidCardCapabilities
 */
export enum PrepaidCardCapabilities {
  APPLEPAY = 'APPLEPAY',
  BANKIN = 'BANK_IN',
  BANKOUT = 'BANK_OUT',
  GOOGLEPAY = 'GOOGLEPAY',
  REVEALCARD = 'REVEAL_CARD',
  REVEALPIN = 'REVEAL_PIN',
  SAMSUNGPAY = 'SAMSUNGPAY',
  SETPIN = 'SET_PIN',
  CONTACTLESS = 'CONTACTLESS',
}

/**
 * Schema for PrepaidCardCapabilities
 */
export const prepaidCardCapabilitiesSchema: Schema<PrepaidCardCapabilities> = stringEnum(PrepaidCardCapabilities);
